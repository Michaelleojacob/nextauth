## v0.5

## versions:

### main

removed

### v0.4

practice - first attempt after a small break

### v0.5

scrapped everything, started from a blank slate. Minimal version, no prisma. consists of only nextjs v14 and nextauth. This version is meant to be a solid jumping off point into more advanced features.

### v0.6

coming soon.

## v0.5 features

- protected route
- nextauth middleware
- nextjs middleware commented out, basic example.
- server side session and session info (see /protected)
- successful signin redirects to protected,
- unsuccessful signin redirects to a signin page.

## v0.5 feature details

- only features basic credentials sign in, using a hard coded user, no form or user input.
- no OAUTH options.
- no db.
- no creating users in the db.

## v0.6 future updates:

- connnect prisma and v0.5 to create a user database.
- connect at least one OAuth.

---

## Supported HTTP methods

The following HTTP methods are supported: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD`, and `OPTIONS`.
source : *https://nextjs.org/docs/app/building-your-application/routing/route-handlers*

---

## Prisma reminders for myself

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
