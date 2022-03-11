import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as twitterImg from '../assets/twitter.png';

export default {
  title: "Stoump/Molecules/Tabs",
} as Meta;

const Template: Story<Components.NavTabs> = ({ tabs }) => {
  return html`<nav-tabs .tabs=${tabs}></nav-tabs>`;
};

export const Default: Story<Components.NavTabs> = Template.bind({});
Default.args = {
  tabs: [
    {
      id: 'docs',
      title: 'Docs',
      href: 'https://stenciljs.com/docs/introduction'
    },
    {
      id: 'resources',
      title: 'Resources',
      href: 'https://stenciljs.com/docs/resources'
    },
    {
      id: 'blog',
      title: 'Blog',
      href: 'https://ionicframework.com/blog/tag/stencil/?_gl=1*1ljv6to*_ga*MTMxMDQzODU5Ni4xNjQ2MDU5NDQ1*_ga_REH9TJF6KF*MTY0NjM4ODU2Ni4xMi4xLjE2NDYzODg1NzcuMA..'
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      href: 'https://ionic.io/products/stencil?__hstc=206288844.25efecd3a6991cc9cb883648761f42f5.1646059445430.1646303955684.1646317865595.5&__hssc=206288844.1.1646317865595&__hsfp=4000847565&_gl=1*7o3gxf*_ga*MTMxMDQzODU5Ni4xNjQ2MDU5NDQ1*_ga_REH9TJF6KF*MTY0NjM4ODU2Ni4xMi4xLjE2NDYzODg2MDguMA..'
    },
    {
      id: 'twitter',
      icon: twitterImg,
      href: 'https://twitter.com/stenciljs'
    },
    {
      id: 'slack',
      icon: twitterImg,
      href: 'https://stencil-worldwide.herokuapp.com/'
    },
    {
      id: 'github',
      icon: twitterImg,
      href: 'https://github.com/ionic-team/stencil'
    },
  ],
};
