import { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../stories/**/*.@(mdx|stories.@(ts|tsx|js|jsx))', '../stories/**/*.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {},
  staticDirs: ['../static', { from: '../assets', to: '/' }],
  docs: {
    autodocs: true,
    defaultName: 'Documentazione',
    docsMode: false
  }
};
export default config;
