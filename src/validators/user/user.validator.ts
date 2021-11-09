import * as yup from "yup";

const user = {
  cedula: yup
    .number()
    .test(
      "len",
      "La cedula debe contener al menos ocho caracteres.",
      (val: any) => val.toString().length === 8
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

const login = {};

export const loginSchema = yup.object().shape({
  ...login,
});

export const userSchema = yup.object().shape({
  ...user,
});
