import thorswapViteConfig from '@internal/config';
import { resolve } from 'path';

import { name } from './package.json';

const viteConfig = thorswapViteConfig(name, {
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      external: [
        '@ethersproject/bignumber',
        '@ethersproject/providers',
        '@thorswap-lib/toolbox-cosmos',
        '@thorswap-lib/toolbox-evm',
        '@thorswap-lib/toolbox-utxo',
        'bitcoinjs-lib',
        'bip39',
      ],
    },
  },
});

export default viteConfig;