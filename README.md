nextjs and nextauth practice

using OAuth and email signin options

```
# Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32
```

to get Github OAuth:
https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/creating-an-oauth-app
`github > settings > developer settings`
generates client ID and client secret

raw .env.locals.exmaple:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET= # Linux: `openssl rand -hex 32` or go to https://generate-secret.now.sh/32

APPLE_ID=
APPLE_TEAM_ID=
APPLE_PRIVATE_KEY=
APPLE_KEY_ID=

AUTH0_ID=
AUTH0_SECRET=
AUTH0_ISSUER=

FACEBOOK_ID=
FACEBOOK_SECRET=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_ID=
GOOGLE_SECRET=

TWITTER_ID=
TWITTER_SECRET=

EMAIL_SERVER=smtp://username:password@smtp.example.com:587
EMAIL_FROM=NextAuth <noreply@example.com>

DATABASE_URL=sqlite://localhost/:memory:?synchronize=true
```
