import { validateProps } from "../../components/Contact/types";

const validate = (values: validateProps) => {
  const errors: validateProps = {};

  if (!values.name) {
    errors.name = "Name is required";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  if (!values.message) {
    errors.message = "Message is required";
  }

  return errors;
};

export default validate;
