import * as yup from "yup";

const user = {
  cedula: yup.number(),
  password: yup
    .string()
    .test(
      "len",
      "Tu contraseña debe tener al menos cinco caracteres.",
      (val: any) => val.toString().length >= 5
    ),
};

export const userSchema = yup.object().shape({
  ...user,
});
