import { Component, ComponentInterface, h, Host, Prop} from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'single-advantage',
  styleUrl: 'advantage.css',
  assetsDirs: ['assets'],
})
export class SingleAdvantage implements ComponentInterface {
  @Prop() identifier?: Identifier = 'advantage';
  @Prop() icon?: string;
  @Prop() adv_title?: string;
  @Prop() text?: string;

  render() {
    return (
      <Host class={`${this.identifier}`}>
        <div class="adv-wrapper">
          <st-image src={`${this.icon}`}>
          </st-image>
          <cu-text class="title" content={`${this.adv_title}`} size={20} color="#03060b"></cu-text>
          <cu-text content={`${this.text}`} size={15} color="#2d4665"></cu-text>
        </div>
      </Host>
    );
  }
}
