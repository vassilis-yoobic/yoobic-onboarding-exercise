import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';
import Helmet from '@stencil/helmet';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'li-checked',
  styleUrl: 'check-item.css',
})

export class CheckedItem implements ComponentInterface {
  @Prop() identifier?: Identifier = 'li';
  @Prop() label?: string;
  @Prop() size: "Small" | "Medium";

  renderIcon() {
    // Also render a script tag including a FontAwesome script in head
    return [
      <Helmet>
        <script src="https://kit.fontawesome.com/dd19a5e4ac.js" crossorigin="anonymous"></script>
      </Helmet>,
      <i class="fa-solid fa-check"></i>,
    ];
  }

  render() {
    return (
      <Host>
        <li class={`li ${this.size}`}>
          {this.renderIcon()} {this.label}
        </li>
      </Host>);
  }
}
