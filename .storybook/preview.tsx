import { Preview } from "@storybook/react";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import React, { CSSProperties } from "react";
import "../assets/css/fonts.css";
import "../assets/css/storybook-fixes.css";
import { FontLoader } from "../src";
import theme from "./theme";

const customStyle = {
    position: 'relative',
    boxSizing: 'border-box',
    margin: '0',
    padding: '48px 32px',
    textAlign: 'initial'
} as CSSProperties;


const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        docs: {
            theme: theme
        },
        decorators: [
            (Story) => (
                <div style={customStyle}>
                    <FontLoader />
                    <Story />
                </div>
            ),
        ],
        options: {
            storySort: {
                order: [
                    "Documentazione",
                    [
                        "form",
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
