import * as yup from "yup";

const user = {
  cedula: yup
    .number()
    .test(
      "len",
      "La cedula debe contener al menos ocho caracteres.",
      (val: any) => val.toString().length
    ),
  password: yup
    .string()
    .required("Debes ingresar una contraseña valida")
    .test(
      "len",
      "Tu contraseña debe tener al menos cinco caracteres.",
      (val: any) => val.toString().length > 5
    ),
};

export const userSchema = yup.object().shape({
  ...user,
});
