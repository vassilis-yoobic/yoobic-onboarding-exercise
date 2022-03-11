import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';


export default {
  title: "Stoump/Organisms/Footer",
} as Meta;

const Template: Story<Components.CuFooter> = ({
  identifier = 'cu-footer',
}) => {
  return html` <cu-footer identifier=${identifier}></cu-footer>`;
};

export const Default: Story<Components.CuHeader> = Template.bind({});
Default.args = {
  identifier: 'footer',
};
