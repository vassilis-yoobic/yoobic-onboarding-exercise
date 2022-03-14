import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'cu-card',
  styleUrl: 'card.css',
})

export class CustomCard implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="card">
          <slot/>
        </div>
      </Host>);
  }
}
