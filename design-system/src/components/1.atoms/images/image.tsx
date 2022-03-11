import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'st-image',
  styleUrl: 'image.css',
})

export class Image implements ComponentInterface {
  @Prop() identifier?: Identifier = 'img';
  @Prop() src?: string;
  @Prop() alt?: string;
  @Prop() size: "Small" | "Medium" | "Large";

  render() {
    return (
      <Host>
        <img class={`img ${this.size}`} src={`${this.src}`} alt={`${this.alt}`} />
      </Host>);
  }
}
