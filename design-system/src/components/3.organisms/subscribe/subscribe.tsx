import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'sub-section',
  styleUrl: 'subscribe.css',
  // assetsDirs: ['assets'],
})
export class SubscribeSection implements ComponentInterface {
  @Prop() identifier?: Identifier = 'sub-section';

  render() {
    return (
      <Host class={`${this.identifier}`}>
          <div class="left">
            <st-image identifier='img' src='static/media/src/assets/mail.png' alt='Mail img' size='Medium'></st-image>
            <div class="text-wrapper">
              <cu-text content='The Stencil Newsletter' size={20} color='#03060b'></cu-text>
              <cu-text content='The Stencil Newsletter' size={16} color='#2d4665'></cu-text>
            </div>
          </div>
          <sub-form identifier="sub-form"></sub-form>
      </Host>
    );
  }
}
