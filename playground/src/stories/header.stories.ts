import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import { TABS } from '../mocks/tabs';

export default {
  title: "Stoump/Organisms/Header",
} as Meta;

const Template: Story<Components.CuHeader> = ({
  identifier = 'cu-header',
  tabs = [],
}) => {
  return html` <cu-header identifier=${identifier} .tabs=${tabs}></cu-header>`;
};

export const Default: Story<Components.CuHeader> = Template.bind({});
Default.args = {
  identifier: 'header',
  tabs: TABS
};
