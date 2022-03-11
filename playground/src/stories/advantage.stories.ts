import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import  advImg  from '../assets/simple.png'

export default {
  title: "Stoump/Molecules/Advantages",
} as Meta;

const Template: Story<Components.SingleAdvantage> = ({ icon = '', adv_title = 'Simple', text = 'Some Text' }) => {
  return html`<single-advantage icon=${icon} adv_title=${adv_title} text=${text}></single-advantage>`;
};

export const Default: Story<Components.SingleAdvantage> = Template.bind({});
Default.args = {
  icon: advImg,
  adv_title: 'Simple',
  text: 'With intentionally small tooling, a tiny API, and zero configuration, Stencil gets out of the way and lets you focus on your work.',
};
