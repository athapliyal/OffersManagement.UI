import { Alert } from "react-bootstrap";
import { FieldErrors } from "react-hook-form";

export const LoginFormErrors: React.FC<FieldErrors> = ({ errors }) => {
  return (
    <>
      {errors?.username && <Alert variant="danger">{errors.username.message}</Alert>}
      {errors?.password && <Alert variant="danger">{errors.password.message}</Alert>}
    </>
  );
};
