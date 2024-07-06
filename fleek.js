import bootstrap from './dist/index.js'
    
export const main = (request) => {
    const {POST} = bootstrap(
        window ? 'https://fleek-test.network/services/1/ipfs/' + window.location.host:
        'https://fleek-test.network/services/1/ipfs/bafkreia2wvqsew4i2cwzgqwg4fxaa2rmjo6ni4mkkez7qgp4ne2ofdj2mq');

    return POST({request})

};
// ./node_modules/.bin/esbuild  fleek.js --bundle --platform=node > fleek-out.js
  // fleek functions deploy  --name fudGame --path fleek.js