import * as yup from "yup"

    const validationSchema = yup.object().shape({
      cedula: yup.number().test('len', 'La cedula debe contener al menos 8 caracteres', (val:any) => val.toString().length === 8).required("Se requiere de este campo"),
    });
    const format = (err:any) => {
      const errors = [] as any
      err.inner.forEach((e: any) => {
        errors.push({
          path: e.path,
          message: e.message
        })
      });
      console.log({errors})
      return {errors}
    }

    export {validationSchema, format}