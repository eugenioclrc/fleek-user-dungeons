import bootstrap from './dist/index.js'
    
export const main = (request) => {
    const {POST} = bootstrap(
        window ? 'https://fleek-test.network/services/1/ipfs/' + window.location.host:
        'https://fleek-test.network/services/1/ipfs/bafybeicnvecqvq3zafk7ivn4quzyo6lwybi3je4kbwecg5tqby55zd7r4e');
    return POST({request})

};
// npm run build
// fleek functions deploy  --name fudGame --path fleek.js