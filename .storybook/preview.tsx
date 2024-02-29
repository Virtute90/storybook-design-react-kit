import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "../assets/css/fonts.css";
import "../assets/css/storybook-fixes.css";
import { Preview } from "@storybook/react";

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        options: {
            storySort: {
                order: [
                    "Documentazione",
                    [
                        "welcome-page",
                        "organizzare",
                        "menu",
                        "componenti",
                        "form",
                        "utilities",
                        "domande-frequenti-page",
                        "changelog-page",
                        "migrazione-da-v1-page",
                    ],
                    "*",
                ],
            },
        },
    },
};

export default preview;
