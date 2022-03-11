import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as appleImg from '../assets/apple.png';
import * as ionicImg from '../assets/ionic.png';
import * as mailImg from '../assets/mail.png';
import * as simpleImg from '../assets/simple.png';
import * as stencilImg from '../assets/stencil.png';
import * as twitterImg from '../assets/twitter.png';


const Template: Story<Components.StImage> = ({
  identifier = 'img',
  src,
  alt,
  size='medium',
}) => {
  return html`<st-image identifier=${identifier} src=${src} alt=${alt} size=${size}></st-image>`;
};

export const Default: Story<Components.StImage> = Template.bind({});
Default.args = {
  src: ionicImg,
  alt: 'Ionic Logo',
  size: 'Medium',
};

export const StencilLogo: Story<Components.StImage> = Template.bind({});
StencilLogo.args = {
  src: stencilImg,
  alt: 'Stencil Logo',
  size: 'Medium',
};

export const navRightImgs: Story<Components.StImage> = Template.bind({});
navRightImgs.args = {
  src: twitterImg,
  alt: 'Twitter icon',
  size: 'Small',
};

export const CompanyImgs: Story<Components.StImage> = Template.bind({});
CompanyImgs.args = {
  src: appleImg,
  alt: 'Apple icon',
  size: 'Medium',
};

export const GridImgs: Story<Components.StImage> = Template.bind({});
GridImgs.args = {
  src: simpleImg,
  alt: 'Simple icon',
  size: 'Medium',
};

export const mailImgs: Story<Components.StImage> = Template.bind({});
mailImgs.args = {
  src: mailImg,
  alt: 'mail icon',
  size: 'Medium',
};

export default {
  title: 'Stoump/Atoms/Images',
  argTypes: {
    src: {
      control: { type: 'text' },
    },
    size: {
      options: ['Small', 'Medium'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;
