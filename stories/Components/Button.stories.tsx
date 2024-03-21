import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, Icon } from "../../src";

const meta: Meta<typeof Button> = {
    title: "Documentazione/Componenti/Breadcrumbs",
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

const colors = ["Primary", "Secondary", "Success", "Info", "Danger", "Warning", "Link"];

export const Esempi: Story = {
    render: () => {
        return (
            <>
                <div className="mb-2">
                    <Button color="primary">Primary</Button>
                    <Button outline color="primary">
                        Primary Outline
                    </Button>
                </div>
                <div className="mb-2">
                    <Button color="secondary">Secondary</Button>
                    <Button outline color="secondary">
                        Secondary Outline
                    </Button>
                </div>
                <div className="mb-2">
                    <Button color="success">Success</Button>
                    <Button outline color="success">
                        Success Outline
                    </Button>
                </div>
                <div className="mb-2">
                    <Button color="info">Info</Button>
                    <Button outline color="info">
                        Info Outline
                    </Button>
                </div>
                <div className="mb-2">
                    <Button color="danger">Danger</Button>
                    <Button outline color="danger">
                        Danger Outline
                    </Button>
                </div>
                <div className="mb-2">
                    <Button color="warning">Warning</Button>
                    <Button outline color="warning">
                        Warning Outline
                    </Button>
                </div>
                <div className="mb-2">
                    <Button color="link">Link</Button>
                    <Button outline color="link">
                        Link Outline
                    </Button>
                </div>
            </>
        );
    },
};

export const VariantiColore: Story = {
    render: () => {
        return (
            <>
                <div className="btn-example">
                    <Button color="primary">Primary</Button>
                    <Button outline color="primary">
                        Primary Outline
                    </Button>
                    <Button color="primary" disabled>
                        Primary disabled
                    </Button>
                    <Button color="primary" outline disabled>
                        Primary out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="secondary">Secondary</Button>
                    <Button outline color="secondary">
                        Secondary Outline
                    </Button>
                    <Button color="secondary" disabled>
                        Secondary disabled
                    </Button>
                    <Button color="secondary" outline disabled>
                        Secondary out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="success">success</Button>
                    <Button outline color="success">
                        success Outline
                    </Button>
                    <Button color="success" disabled>
                        success disabled
                    </Button>
                    <Button color="success" outline disabled>
                        success out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="danger">danger</Button>
                    <Button outline color="danger">
                        danger Outline
                    </Button>
                    <Button color="danger" disabled>
                        danger disabled
                    </Button>
                    <Button color="danger" outline disabled>
                        danger out. disabled
                    </Button>
                </div>
                <div className="btn-example">
                    <Button color="warning">warning</Button>
                    <Button outline color="warning">
                        warning Outline
                    </Button>
                    <Button color="warning" disabled>
                        warning disabled
                    </Button>
                    <Button color="warning" outline disabled>
                        warning out. disabled
                    </Button>
                </div>
            </>
        );
    },
};

export const SfondoScuro: Story = {
    render: () => (
        <div className="bg-dark py-1">
            <div className="btn-example">
                <Button color="primary">Primary</Button>
                <Button outline color="primary">
                    Primary Outline
                </Button>
                <Button color="primary" disabled>
                    Primary disabled
                </Button>
                <Button color="primary" outline disabled>
                    Primary out. disabled
                </Button>
            </div>
            <div className="btn-example">
                <Button color="secondary">Secondary</Button>
                <Button outline color="secondary">
                    Secondary Outline
                </Button>
                <Button color="secondary" disabled>
                    Secondary disabled
                </Button>
                <Button color="secondary" outline disabled>
                    Secondary out. disabled
                </Button>
            </div>
        </div>
    ),
};

export const VariantiDiDimensione: Story = {
    render: () => (
        <section>
            <div>
                <Button color="primary" size="lg">
                    Primary Large
                </Button>
                <Button color="secondary" size="lg">
                    Secondary Large
                </Button>
                <div className="mt-3" />
                <Button color="primary" size="sm">
                    Primary Small
                </Button>
                <Button color="secondary" size="sm">
                    Secondary Small
                </Button>
                <div className="mt-3" />
                <Button color="primary" size="xs">
                    Primary Mini
                </Button>
                <Button color="secondary" size="xs">
                    Secondary Mini
                </Button>
                <div className="mt-3" />
                <Button color="primary" block>
                    Primary Block
                </Button>
                <Button color="secondary" block>
                    Secondary Block
                </Button>
            </div>
        </section>
    ),
};

export const BottoniConIcona: Story = {
    render: () => (
        <div>
            <Button color="success" size="lg" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button Large
            </Button>
            <Button color="primary" icon>
                <Icon color="white" icon="it-star-full" /> Icon Button
            </Button>
            <Button color="danger" size="sm" icon>
                <Icon color="secondary" icon="it-star-full" /> Icon Button Small
            </Button>
            <Button color="info" size="xs" icon>
                <Icon color="danger" icon="it-star-full" /> Icon Button Extra Small
            </Button>
        </div>
    ),
};

export const BottoniConIconaCerchiata: Story = {
    render: () => (
        <div>
            <Button color="success" size="lg" icon>
                <span className="rounded-icon">
                    <Icon color="success" icon="it-user" />
                </span>
                <span>Round Icon Large</span>
            </Button>
            <Button color="primary" icon>
                <span className="rounded-icon">
                    <Icon color="primary" icon="it-user" />
                </span>
                <span>Round Icon</span>
            </Button>
            <Button color="danger" size="sm" icon>
                <span className="rounded-icon rounded-secondary">
                    <Icon color="white" icon="it-user" />
                </span>
                <span>Round Icon Small</span>
            </Button>
            <Button color="info" size="xs" icon>
                <span className="rounded-icon rounded-danger">
                    <Icon color="white" icon="it-user" />
                </span>
                <span>Round Icon Extra Small</span>
            </Button>
        </div>
    ),
};

export const StatoAttivo: Story = {
    render: () => (
        <div>
            {colors.map((color) => (
                <span key={color}>
                    <Button color={color.toLowerCase()}>{color}</Button>
                </span>
            ))}
        </div>
    ),
};

export const StatoDisabilitato: Story = {
    render: () => (
        <div>
            {colors.map((color) => (
                <span key={color}>
                    <Button color={color.toLowerCase()} disabled>
                        {color}
                    </Button>
                </span>
            ))}
        </div>
    ),
};
