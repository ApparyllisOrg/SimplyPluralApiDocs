---
id: authentication
title: Authentication
sidebar_label: Authentication
slug: /getting-started/authentication
---

## Authentication

To authenticate for API requests (not socket, for that see [sockets](/docs/getting-started/socket)), simply add your API token in full, without spaces or extra characters into the Authorization field

```js title="Authentication"
    {
        "Authorization" : "insert-your-token"
    }
```

:::caution

Tokens have different permissions (Read, write and delete). To succcesfuly authenticate for an API request you need to make sure you have the right permissions.
Generally this is Read for all **GET** requests, Write for all **POST** and **PATCH** requests and Delete for all **DELETE** requests.

:::

