import { useRef } from 'react';
import { DropTargetMonitor, useDrag, useDrop } from 'react-dnd';
import styles from './constructor-item.module.css';
import {DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { IIngredient } from '../../interfaces/interfaces';
import { deleteConstructorIngredient, moveConstructorIngredient } from '../../services/actions/burgerActions';
import { useAppDispatch } from '../../utils/hooks';

type TIngredientId = {
  ingredientId: string;
}

interface IConstructorItem {
  ingredient: IIngredient & TIngredientId;
  index: number;
}

const ConstructorItem = ({ingredient, index }: IConstructorItem) => {
    const id: string = ingredient._id;
    const ref = useRef<HTMLLIElement>(null);
    const dispatch = useAppDispatch();
    
    const [, drop] = useDrop({
      accept: "constructor",
      hover(item: {index: number}, monitor: DropTargetMonitor) {
        if (!ref.current) {
          return;
        }

        const [dragIndex, hoverIndex] = [item.index, index];
        if (!dragIndex || dragIndex === hoverIndex) {
          return;
        }

        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        if (!clientOffset) return;

        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;
        dispatch(moveConstructorIngredient({ dragIndex, hoverIndex }));
        item.index = hoverIndex;
      }
    });

    const [{isDragging}, drag] = useDrag({
      type: "constructor",
      item: {id, index},
      collect: (monitor) => ({
          isDragging: monitor.isDragging(),
      }),
    });
    
    drag(drop(ref));
    const opacity = isDragging ? 0 : 1;
    return (
      <div className={styles['list-item-wrap']} key={ingredient.ingredientId} style={{ opacity }}>
        <DragIcon type="primary" />
        <li ref={ref} className={styles.ingredient}>
          <ConstructorElement
            handleClose={() => dispatch(deleteConstructorIngredient(ingredient.ingredientId))}
            text={ingredient.name}
            price={ingredient.price}
            thumbnail={ingredient.image}
          />
        </li>
      </div>
    );
}

export default ConstructorItem;