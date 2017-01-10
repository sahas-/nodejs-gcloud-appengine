### Contents
* express server
* bunyan logging
* helmet assisted security vulnerability checks
* rate limiting
* deployment to google cloud app engine (pre-requisite: gcloud sdk, https://cloud.google.com/sdk/) 

### Local development

`npm install`

`npm run watch`

### To deploy to gcloud

`npm run build` - this should generate transpiled code in ./dist

`npm run deploy` - this will take the entire app, deploy to google cloud app engine and start the server

### To run load test
This example uses apache benchmark (1000 requests with 5 users concurrency)


`ab -n 10000 -c 100 http://localhost:8080/factorial/110`

