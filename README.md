# lendlab

Tu institución, ahora en forma online.

## ¿Como puedo correr el proyecto?

* Clonar este repositorio y el de lendlab https://github.com/LendLab/lendlab
* Crear una base de datos VACÍA con el nombre `lendlab2`
* Abrir Xampp e iniciar `Apache` y  `MySql`
* Ejecutamos en la consola los siguientes comandos:

```bash
# npm

npm install

npm run dev

```
> Ten en cuenta que esto solo crea el backend, para visualizar la página debes también seguir los pasos del repositorio https://github.com/LendLab/lendlab y seguir los pasos que se enlistan allí.  
## Queries

### Prestamos

* Obtener todos los prestamos

```bash
query Query {
  lend {
    id_lend
    fecha_hora_presta
    fecha_vencimiento
    fecha_devolucion
    reservation {
      id_reserva
    }
  }
}
```

### Materiales

* Obtener todos los materiales

```bash
query Query {
  getMaterials {
    id_material
    nombre
    etiqueta
    categoria
    descripcion
    cantidad
    foto
    estado
  }
}
```

* Obtener un solo material

```bash
query Query($idMaterial: Int!) {
  getMaterial(id_material: $idMaterial) {
    id_material
    nombre
    etiqueta
    categoria
    descripcion
    cantidad
    foto
    estado
  }
}
```

### Reservas

* Obtener todas las reservas

```bash
query Query {
  getReservations {
    id_reserva
    fecha_hora
    finalizada
    user {
      cedula
      nombre
      direccion
      foto_usuario
      telefono
      tipo_usuario
      fecha_nacimiento
    }
    material {
      id_material
      nombre
      etiqueta
      categoria
      descripcion
      cantidad
      foto
      estado
    }
  }
}
```

### Usuarios

* Obtener todos los usuarios

```bash
query Query {
  getUsers {
    cedula
    nombre
    direccion
    foto_usuario
    telefono
    tipo_usuario
    fecha_nacimiento
  }
}
```

* Obtener un solo usuario

```bash
query Query($cedula: Int!) {
  getUser(cedula: $cedula) {
    cedula
    nombre
    direccion
    foto_usuario
    telefono
    tipo_usuario
    fecha_nacimiento
  }
}
```
