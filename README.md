## Natter Away

#### A minimal service to start a natter.

Run:

```
docker build . -t natter-away
docker run --network host -p 5000:5000 -d natter-away
```

### cURL requests

```
[POST] curl -d '{"natter":"Test natter"}' -H 'Content-Type: application/json' http://127.0.0.1:5000/natters
[GET]  curl -H 'Content-Type: application/json' http://127.0.0.1:5000/natters
```

###### NO DB IMPLEMENTATION YET!
