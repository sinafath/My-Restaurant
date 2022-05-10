import styles from "./index.module.css";
import { FormHTMLAttributes } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface Form extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}

function Form({ onSubmit, children, ...rest }: Form) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={styles.form}
        {...rest}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
