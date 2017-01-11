### Contents
* express server
* bunyan logging
* helmet assisted security vulnerability checks
* rate limiting
* deployment to google cloud app engine (pre-requisite: gcloud sdk, https://cloud.google.com/sdk/) 

### Local development

`npm install`

`npm run watch`

### Test the app

- [http://localhost:8080/healthcheck](http://localhost:8080/healthcheck)
- [http://localhost:8080/delay](http://localhost:8080/healthcheck)
- [http://localhost:8080/factorial/110](http://localhost:8080/healthcheck)

### Setup google cloud

- Login to [google cloud](https://console.cloud.google.com)
- Sign up for free trial. You will have to use your credit card even to get started with free trial
- Install [gcloud sdk](https://cloud.google.com/sdk/docs/#install_the_latest_cloud_tools_version_cloudsdk_current_version) 
- Configure gcloud

```sh
# Follow the instructions after running gcloud init.
gcloud init

# See all existing configurations
gcloud config configurations list

```
- Create a new project in https://console.cloud.google.com

```sh
# Switch gcloud config to use the new project you have created

gcloud init

#  Re-initialize this configuration <config-name> with new settings
#  Choose your account
#  Pick cloud project to use: 
#  Select the new project that was created

```
- Create an app engine application. You can do that either from the console or using command line


```sh
# Create a new app engine application
gcloud app create

```

### To deploy to gcloud

`npm run build` - this should generate transpiled code in ./dist

`npm run deploy` - this will take the entire app, deploy to google cloud app engine and start the server

- To shutdown the project, https://cloud.google.com/appengine/docs/python/console/#managing_cookies_authentication_and_logs_retention

### To run load test

This example uses apache benchmark (1000 requests with 5 users concurrency)


`ab -n 10000 -c 100 http://localhost:8080/factorial/110`



