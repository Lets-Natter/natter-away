## Natter Away

#### A minimal service to start a natter.

Run:

```
npm install
npm start
```

### cURL requests

```
[POST] curl -d '{"natter":"Test natter"}' -H 'Content-Type: application/json' http://127.0.0.1:5000/natters
[GET]  curl -H 'Content-Type: application/json' http://127.0.0.1:5000/natters
```

###### NO DB IMPLEMENTATION YET!
