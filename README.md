# Frutero Club - NextJS PWA Starter

Este repositorio fue creado para facilitar la configuración de un proyecto NextJS para utilizarse como una Progressive Web App.

**Hackea y aprende con amigos mientras construyes cosas divertidas**

Bienvenido a Frutero Club, un apasionado colectivo de mentes vibrantes, unidas por la fascinación compartida hacia la tecnología.

## ¡Empieza a hackear!

#### Requisitos

- NodeJS v20.10.0 (LTS) o superior
- Git
- Sugerimos crear una cuenta en Supabase o PlanetScale, y obtener un string de conexión para tu propia Base de Datos. [Cómo obtener en Supabase](https://supabase.com/docs/guides/database/connecting-to-postgres).

### Configuración inicial:

Clona este repositorio

```bash
  git clone https://github.com/frutero-club/next-pwa-starter.git
```

Cambia al directorio del proyecto

```bash
  cd next-pwa-starter
```

Instala las dependencias

```bash
  bun install
```

_Utilizamos bun para este proyecto, puedes obtener más información en la [documentación oficial de Bun](https://bun.sh/docs/installation)_

### Variables de ambiente

Para que la aplicación funcione en su totalidad, debes crear una copia del archivo `.env.example` y nombrarlo `.env`

En este nuevo archivo `.env`, es necesario modificar las siguientes variables de estado:

`DATABASE_URL`

### Inicia la aplicación

Corre el siguiente script para iniciar el servidor de NextJS

```bash
  bun run dev
```

La aplicación iniciará en `http://localhost:3000`

### Migración Base de Datos

Corre el siguiente script aplicar las migraciones a la base de datos, y así estar sincronizado con el schema (arquitectura de la base de datos: tablas, modelos, relaciones, etc.):

```bash
  npx prisma migrate dev
```

Ahora debes poder iniciar Prisma Studio, el explorador default de Prisma para la base de datos.

```bash
  npx prisma studio
```

Iniciará la aplicación de Prisma Studio en `http://localhost:5050`. Aquí podrás interactuar la base de datos mientras desarrollas.

Cuando realices un cambio en la base de datos, deberás seguir el flujo de Prisma:

1. Modificar el schema en el archivo `/prisma/schema.prisma`
2. Crear una migración
3. Continuar trabajando en el código
4. Repetir en caso de requerir otra modificación

Puedes utilizar [esta guía](https://www.prisma.io/docs/guides/migrate/developing-with-prisma-migrate) para conocer más del flujo de desarrolo de Prisma
