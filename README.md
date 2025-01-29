This is a news portal project using nextjs and prisma with mysql database.

```bash
npm run dev

```

### .env file

DATABASE_URL="mysql://root:@localhost:3306/news_portal"

JWT_SECRET="secret"
JWT_ISSUER="Localhost"
JWT_EXPIRATION_TIME="24h"

SMTP_HOST=""
SMTP_PORT=""
SMTP_SECURE="false"
SMTP_USER=""
SMTP_PASS=""

HOST="http://localhost:3000/api"

NEXT_PUBLIC_HOST="http://localhost:3000/api"
