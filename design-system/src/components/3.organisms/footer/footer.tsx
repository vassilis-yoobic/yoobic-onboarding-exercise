import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'cu-footer',
  styleUrl: 'footer.css',
})
export class CuHeader implements ComponentInterface {
  @Prop() identifier?: Identifier = 'footer';

  render() {
    return (
      <Host class={`${this.identifier}`}>
        <st-image identifier="img" src="static/media/src/assets/stencil.png" alt="Stencil Logo" size="Small"></st-image>
        <cu-text content='© 2022 StencilJS. Released under MIT License' size={12} color='#626265'></cu-text>
        <div class="bottom-wrapper">
          <st-image identifier="img" src="static/media/src/assets/twitter.png" alt="Twitter icon" size="Small"></st-image>
          <st-image identifier="img" src="static/media/src/assets/twitter.png" alt="Twitter icon" size="Small"></st-image>
          <st-image identifier="img" src="static/media/src/assets/twitter.png" alt="Twitter icon" size="Small"></st-image>
        </div>
      </Host>
    );
  }
}
