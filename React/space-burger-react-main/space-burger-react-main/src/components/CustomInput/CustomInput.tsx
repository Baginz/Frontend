import React from "react";
import styles from "./CustomInput.module.css";

interface ICustomInput {
  placeholder: string;
  type: string;
  isRequired: boolean;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isCustom?: boolean;
}

function CustomInput(props: ICustomInput): JSX.Element | null {
  const { placeholder, type, value, handleChange, isRequired, isCustom }: ICustomInput = props;
  const [typeInput, setTypeInput] = React.useState<string>(type);
  const onEyeClick = (): void => {
    if (typeInput === "password") {
      setTypeInput("show-password");
    } else {
      setTypeInput("password");
    }
  };

  const renderCustomInput = (): JSX.Element => !isCustom ? (
    <>
      <label className={styles.input_label}>{value ? "" : placeholder}</label>
      <input
        type={typeInput}
        value={value || ""}
        onChange={handleChange}
        required={isRequired}
        className={styles.input}
      />
      {((typeInput === "password" && value) ||
        (typeInput === "show-password" && value)) && (
        <div className={styles.input_eye} onClick={onEyeClick}></div>
      )}
    </>
  ) : (
    <>
      <label className={styles.input_profile_label}>{placeholder}</label>
      <input
        type={typeInput}
        value={value || ""}
        onChange={handleChange}
        required={isRequired}
        className={`${styles.input} ${styles.input_profile}`}
      />

      {(typeInput === "password" && value) ||
      (typeInput === "show-password" && value) ? (
        <div className={styles.input_eye} onClick={onEyeClick}></div>
      ) : (
        <div className={styles.input_pencil}></div>
      )}
    </>
  );

  return <section className={styles.input_container}>{renderCustomInput()}</section>;
}

export default CustomInput;