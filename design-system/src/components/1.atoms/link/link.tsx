import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cu-link',
  styleUrl: 'link.css',
})

export class CustomLink implements ComponentInterface {
  @Prop() href!: string;
  @Prop() icon?: string;

  render() {
    return (
      <Host>
        <a href={`${this.href}`} class="link">
          <slot/>
        </a>
      </Host>);
  }
}
