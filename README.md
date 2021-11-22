# Solidus GraphQL playground

This is the GraphQL playground set up at http://graphql-playground.solidus.io.

To use it locally, run:

```bash
npm install
npm start
```

By default, it'll be available at http://localhost:4000, but you can change the
port with the `PORT` environment variable:

```bash
PORT=5000 npm start
```

Likewise, `http://localhost:3000/graphql` is configured as the GraphQL
endpoint, but you can change it through `ENDPOINT`:

```bash
ENDPOINT=http://localhost:4000/graphql npm start
```
