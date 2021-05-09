# FT-Exercise

A JavaScript package that is able to  
● fetch an array of URLs which contain JSON data  
● return their contents in a promise  
● ignoresFetchFailures by default but can be overridden with a boolean parameter.

## Install
Run the the below command in the terminal
```
npm install req-multiple-urls 

```

## Example Usage

```
const reqMultipleUrls = require('req-multiple-urls')

const urls = [
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json', 
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json', 
'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
]

const ignoreFetchFailures = false;

const getData = () => {
    const data = reqMultipleUrls(urls, ignoreFetchFailures)
        .then(data => console.log(data))
        .catch(error => console.error(error))
}

getData()

```

## Dependencies

http/https native GET API vs third party package(node-fetch, axios etc.)

I have chosen ```node-fetch``` which is a light-weight module that brings Fetch API to Node.js.

It supports promises unlike streams in https.get (supports our use case that package should return a promise), fewer dependencies, less verbose.





