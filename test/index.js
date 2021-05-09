const reqMultipleUrls = require('../index');
const { expect } = require('chai');
const urls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json',
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

const failureCaseURls = [
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json',
    // 2nd url tweaked to fail
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbpe-hkd.json', 
    'https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json'
];

describe('request multiple urls package - ignoreFetchFailures=true', function(){
    
    it('should return a 200 response when all 3 correct urls are sent', async()=>{
        try {
            const response = await reqMultipleUrls(urls);
            expect(response).to.be.an('Array');
            expect(response.length).to.equal(3);
        } catch(e) {
            console.log(e);
        }        
    });

    it('should return a response with undefined value for failures if some of them err', async()=>{
        try {
            const response = await reqMultipleUrls(failureCaseURls);
            expect(response).to.be.an('Array');
            expect(response[1]).to.equal(undefined);
        } catch(e) {
            console.log(e);
        }
    });
});

describe('request multiple urls package - ignoreFetchFailures=false', function(){
    
    it('should return a 200 response when all 3 correct urls are sent', async()=>{
        try {
            const response = await reqMultipleUrls(urls, false);
            expect(response).to.be.an('Array');
            expect(response.length).to.equal(3);
        } catch(e) {
            console.log(e);
        }        
    });

    it('should catch an error in catch block if some of them err', async()=>{
        try {
            const response = await reqMultipleUrls(failureCaseURls, false);
        } catch(e) {
            expect(e).to.be.an.instanceOf(Error);
        }
    });
});