const fetch = require('node-fetch');

module.exports = function(urls, ignorefetchFailures = true) {
    var data = Promise.all(
        urls.map((url) =>
            fetch(url)
                .then(checkStatus)
                .catch((error) => { 
                    console.error(`${error}`); 
                    if(!ignorefetchFailures) { return Promise.reject(error); }
                })
        )
    );
    return data;
};

const checkStatus = (res) => {
    if (res.ok) { return Promise.resolve(res.json()); }
    else { return Promise.reject(new Error(res.statusText)); }
}
