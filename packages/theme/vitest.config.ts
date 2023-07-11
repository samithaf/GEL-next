import westpacConfig from '@westpac-x/test-config/vitest';
import { defineConfig, mergeConfig } from 'vitest/config';

export default mergeConfig(
  defineConfig(westpacConfig),
  defineConfig({
    test: {
      environment: 'jsdom',
    },
  }),
);
