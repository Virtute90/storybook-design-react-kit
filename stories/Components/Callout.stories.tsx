/* eslint jsx-a11y/anchor-is-valid: 0 */
import type { Meta, Story, StoryObj } from "@storybook/react";
import React from "react";

import { componentColor } from "../../.storybook/stories-helper";
import { Callout, CalloutProps, CalloutText, CalloutTitle, Icon } from "../../src";

const meta: Meta<typeof Callout> = {
    title: "Documentazione/Componenti/Callout",
    component: Callout,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof Callout>;

export const EsempioBasico: Story = {
    render: () => (
        <Callout>
            <CalloutTitle>
                <span className="text">Titolo Callout</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
    ),
};

export const EsempioConIcona: Story = {
    render: () => (
        <Callout>
            <CalloutTitle>
                <Icon icon="it-info-circle" padding={false} aria-hidden />
                <span className="visually-hidden">Confermato</span>
                <span className="text">Titolo Callout</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
    ),
};

export const EsempioAccessibilita: Story = {
    render: () => (
        <Callout>
            <CalloutTitle>
                <Icon icon="it-check-circle" padding={false} aria-hidden />
                <span className="visually-hidden">Confermato</span>
                <span className="text">Titolo Callout</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
    ),
};

type CalloutTemplateProps = {
    color: CalloutProps["color"];
    title: string;
    icon: string;
};
export const CalloutVariantiColore: Story & { icon: string } = {
    render: ({ ...args }) => (
        <Callout color={args.color}>
            <CalloutTitle>
                <Icon icon={`it-${args.icon}-circle`} padding={false} aria-hidden />
                <span className="text">{args.title}</span>
            </CalloutTitle>
            <CalloutText>
                Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus
                vestibulum varius.
            </CalloutText>
        </Callout>
    ),
    args: {
        color: "success",
        icon: "check",
        title: "Usa",
    },
    argTypes: {
        color: {
            control: "select",
            options: componentColor,
        },
    },
};

/* export const ProceduraCheRichiedeAttenzione: Story = CalloutTemplate.bind({});

export const CalloutHighlights: Story = () => (
    <Callout highlight>
        <CalloutTitle>Titolo Callout</CalloutTitle>
        <CalloutText bigText>
            Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
        </CalloutText>
        <CalloutText>
            Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
            varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a>
        </CalloutText>
    </Callout>
);

type CalloutHighlightTemplateProps = CalloutTemplateProps;
const CalloutHighlightsTemplate: Story<CalloutHighlightTemplateProps> = ({ title, color, icon }) => (
    <Callout highlight color={color}>
        <CalloutTitle>
            <Icon icon={`it-${icon}-circle`} padding={false} aria-hidden />
            {title}
        </CalloutTitle>
        <CalloutText>
            Maecenas at erat id sem interdum efficitur eu sed nunc. Mauris sit amet erat eget augue molestie malesuada ut sed ex. In sed dignissim elit.
        </CalloutText>
        <CalloutText>
            Maecenas vulputate ante dictum vestibulum volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non augue non purus vestibulum
            varius. Maecenas ullamcorper <a href="#">tincidunt nulla quis laoreet.</a>
        </CalloutText>
    </Callout>
);

export const CalloutHighlightsSuccess: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind({});
CalloutHighlightsSuccess.args = {
    title: "Usa",
    color: "success",
    icon: "check",
};

export const CalloutHighlightsWarning: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind({});
CalloutHighlightsWarning.args = {
    title: "Attenzione",
    color: "warning",
    icon: "help",
};

export const CalloutHighlightsDanger: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind({});
CalloutHighlightsDanger.args = {
    title: "Non usare",
    color: "danger",
    icon: "close",
};

export const CalloutHighlightsImportant: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind({});
CalloutHighlightsImportant.args = {
    title: "Importante",
    color: "important",
    icon: "info",
};

export const CalloutHighlightsNote: Story<CalloutHighlightTemplateProps> = CalloutHighlightsTemplate.bind({});
CalloutHighlightsNote.args = { title: "Note", color: "note", icon: "info" };

export const CalloutApprofondimento = () => {
    return (
        <Callout color="note" detailed>
            <CalloutTitle>
                <Icon icon="it-zoom-in" padding={false} aria-hidden />
                <span>Approfondimento</span>
            </CalloutTitle>
            <CalloutText>
                <p>
                    Quisque suscipit interdum augue non volutpat. Cras tristique arcu tortor. Mauris eu magna nibh. Curabitur malesuada neque in lectus sagittis
                    accumsan. In vitae justo eros. Maecenas pellentesque lacinia ipsum vitae rhoncus. Vestibulum pretium tempor turpis, nec gravida eros viverra
                    in. Proin dictum nibh ut semper tristique.
                </p>
                <p>
                    Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex. In
                    sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.
                </p>
                <p>
                    Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{" "}
                    <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis
                    laoreet.
                </p>
                <CalloutMoreFooter id="example" fileUrl="#">
                    <p>
                        Aenean tortor enim, suscipit eget commodo at, imperdiet quis diam. Vestibulum non accumsan felis, at ultrices lorem. Pellentesque ac
                        diam a ipsum cursus interdum id nec odio. Vestibulum nec congue mauris. Aliquam et dui purus. Mauris in imperdiet risus, sed blandit
                        tellus. Donec posuere accumsan lacinia. Mauris dignissim, sem vel volutpat rhoncus, neque mi ullamcorper ante, vitae volutpat ipsum quam
                        id purus. Duis tincidunt sodales nisl eget ultricies. Sed condimentum mi eu ex venenatis, quis bibendum dui ultrices. Quisque ex eros,
                        pellentesque vitae enim sed, pharetra tempus dolor. Donec eu nibh ac lacus luctus pellentesque. Duis interdum scelerisque magna nec
                        malesuada.
                    </p>
                    <p>
                        Maecenas at erat id <strong>sem interdum efficitur eu sed nunc.</strong> Mauris sit amet erat eget augue molestie malesuada ut sed ex.
                        In sed dignissim elit. Donec efficitur, sem eget vestibulum auctor, sem erat interdum magna, eu commodo odio mauris semper dolor.
                    </p>
                    <p>
                        Maecenas vulputate ante dictum <a href="#">vestibulum volutpat</a>. Lorem ipsum dolor sit amet,{" "}
                        <strong>consectetur adipiscing elit.</strong> Aenean non augue non purus vestibulum varius. Maecenas ullamcorper tincidunt nulla quis
                        laoreet.
                    </p>
                </CalloutMoreFooter>
            </CalloutText>
        </Callout>
    );
};
 */
