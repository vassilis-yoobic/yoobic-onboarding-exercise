import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import  { ADVANTAGES }  from '../mocks/advantage'

export default {
  title: "Stoump/Organisms/Advantages",
} as Meta;

const Template: Story<Components.GridAdvantage> = ({
  identifier = 'grid-advantage',
  advantages = [],
}) => {
  return html`<grid-advantage identifier=${identifier} .advantages=${advantages}></grid-advantage>`;
};

export const Default: Story<Components.GridAdvantage> = Template.bind({});
Default.args = {
  advantages: ADVANTAGES,
};
