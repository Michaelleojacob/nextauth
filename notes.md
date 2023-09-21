The following HTTP methods are supported: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`.
source : *https://nextjs.org/docs/app/building-your-application/routing/route-handlers*

---

check that `.gitignore` includes `.env`

.env includes: `DATABASE_URL=` is the long db string  
and that prisma/schema.prisma only ever includes:

```js
//prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

if this ever changes, please DO NOT COMMIT.

---

prisma start up:

add db connection string to `.env`  
use command `npx prisma init` in the terminal - may fail since `/prisma` already exists  
`npx prisma db pull`;
`npx prisma generate`;

---

to make changes to the prisma db: use `npx prisma db push`.

If we need to change the schema it might be best to start a new db instance, or wipe the previous one clean.
