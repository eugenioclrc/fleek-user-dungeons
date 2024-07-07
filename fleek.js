import bootstrap from './dist/index.js'
    
export const main = (request) => {
    const {POST} = bootstrap(
        window ? 'https://fleek-test.network/services/1/ipfs/' + window.location.host:
        'https://fleek-test.network/services/1/ipfs/bafybeibe7qb7bmkflttcgbxihzcuu2jafqmykzjva4pkyflmvp2k3wjy3q');
    return POST({request})

};
// npm run build
// fleek functions deploy  --name fudGame --path fleek.js