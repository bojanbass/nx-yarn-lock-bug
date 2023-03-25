import type { StorybookConfig } from '@storybook/core-common';

export const rootMain: StorybookConfig = {
  stories: [],
  refs: {
    'shared-ui-form': {
      title: 'Form components',
      url: 'http://localhost:4401/',
    },
    'shared-ui-icons': {
      title: 'Icons',
      url: 'http://localhost:4402/',
    },
    'shared-ui-layout': {
      title: 'Icons',
      url: 'http://localhost:4403/',
    },
  },
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
