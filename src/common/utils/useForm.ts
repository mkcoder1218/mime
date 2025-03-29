import { useState } from "react";
import { ValidationTypeProps, validateProps } from "../../components/Contact/types";

interface SubmitProps {
  name: string;
  email: string;
  message: string;
}

export const useForm = (validate: (values: validateProps) => validateProps) => {
  const [values, setValues] = useState<SubmitProps>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<validateProps>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
};
