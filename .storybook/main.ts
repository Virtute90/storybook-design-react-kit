import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx|mdx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-onboarding", "@storybook/addon-interactions", "@storybook/addon-a11y"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        builder: "@storybook/builder-vite", // 👈 The builder enabled here.
    },
    staticDirs: ["../static", { from: "../assets", to: "/" }],
    docs: {
        autodocs: "tag",
    },
};
export default config;
