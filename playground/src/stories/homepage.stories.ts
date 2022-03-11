import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import { ADVANTAGES } from '../mocks/advantage';
import { TABS } from '../mocks/tabs';

export default {
  title: "Stoump/Templates/Homepage",
} as Meta;

const Template: Story<Components.MyHomepage> = ({
  identifier = 'homepage',
  tabs = [],
  advantages = [],
}) => {
  return html` <my-homepage identifier=${identifier} .tabs=${tabs} .advantages=${advantages}></my-homepage>`;
};

export const Default: Story<Components.MyHomepage> = Template.bind({});
Default.args = {
  identifier: 'homepage',
  tabs: TABS,
  advantages: ADVANTAGES,
};
