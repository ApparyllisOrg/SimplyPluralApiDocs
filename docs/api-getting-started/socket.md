---
id: socket
title: Socket connection
sidebar_label: Socket connection
slug: /getting-started/socket
---

## Connecting

To create a socket connection please connect to either of the below Urls:

** Production **  
`wss://api.apparyllis.com/v1/socket`  

** Pretesting **  
`wss://devapi.apparyllis.com/v1/socket`  


## Authenticating

Once connected to the socket you will need to authenticate, you can do this by sending this payload

```js title"payload"
{'op': 'authenticate', 'token': "insert-your-token-here"}
```
You will receive one of two messages:

`Authentication violation: Token is missing or invalid. Goodbye :)`

or

`Successfully authenticated`

If you receive the violation make sure your token is valid and that there's no extra characters or white space at the front or end of the token. Create a new connection and re-authenticate. You can't try to authenticate more than once on the same connection.

Otherwise if there's no violation you are fully authenticated and you will receive updates when your authenticated user has updates.

## Keeping alive

You will need to keep the connection alive to make sure it doesn't drop.  
To do so simply send the following string to the socket every 10 seconds:
```js title"payload"
ping
```

## Data format

When an insert, update or delete happens on one of your authenticated users' data you will be notified in the following format:

```js title="payload"
{
    "msg" : "Update",
    "target" : "collection (members, frontHistory, etc.)",
    "results" : [
        {
            "operationType" : "delete/insert/update",
            "id" : "Id of the object that changed",
            "content" : { ... }
        }
    ]
}
```

