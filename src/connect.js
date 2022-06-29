import { ScProvider } from '@polkadot/rpc-provider/substrate-connect';
import { ApiPromise } from '@polkadot/api';

import jsonCustomSpec from './assets/chain_spec_main.json';

// Create the provider for the custom chain
const customSpec = JSON.stringify(jsonCustomSpec);

export const initApi = async () => {
    const provider = new ScProvider(customSpec);

    // Stablish the connection (and catch possible errors)
    await provider.connect({ forceEmbeddedNode: true, embeddedNodeConfig: { maxLogLevel: 4 } });

    // Create the PolkadotJS api instance
    const api = await ApiPromise.create({ provider });

    return api;
}

// await api.rpc.chain.subscribeNewHeads((lastHeader) => {
//     console.log(lastHeader.hash);
// });

// await api.disconnect();