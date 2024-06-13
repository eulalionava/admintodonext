# Develoment

* Levantar la base de datos

```
docker compose up -d
```
1. Renombrar el .env.template a .env
2. Remplazar las variables de entorno
3. Ejecutar el comando ``` npm install```
4. Ejecutar el comando ``` npm run dev```
5. Ejecutar estos comandos:
    npx prisma migrate dev
    npx prisma generate

6. Ejecutar el SEED [para crear la base de datos local](localhost:3000/api/seed)
# Prisma comands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```


# Prod