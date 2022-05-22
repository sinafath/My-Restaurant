import styles from "./index.module.css";
import partialProps from "../../../Utils/withProps";
import { useFormContext } from "react-hook-form";

type Input = {
  title: string;
  type?: string;
  classNames?: {
    label?: string;
    input?: string;
  };
};

function Input({ title, type, classNames }: Input) {
  const { register } = useFormContext();
  return (
    <>
      <label
        htmlFor={`${title}-input`}
        className={classNames?.label || styles.label}
      >
        {title}:
      </label>
      <input
        type={type || "text"}
        id={`${title}-input`}
        {...register(title)}
        className={classNames?.input || `${styles.input} ${styles.errorInput}`}
      />
    </>
  );
}

const CreateSamePropInput = (type: string)
  => (props: Partial<Input>) =>
    <Input type={type} title={type} {...props} />

const Email = CreateSamePropInput("email")
const Password = CreateSamePropInput("password")

export { Password, Email };
export default Input;
