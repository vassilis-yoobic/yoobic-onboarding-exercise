import { Component, ComponentInterface, EventEmitter, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'my-btn',
  styleUrl: 'button.css',
})

export class MyBtn implements ComponentInterface {
  @Prop() identifier?: Identifier = 'button';
  @Prop() label?: string;
  @Prop() size: "Small" | "Medium";
  @Prop() type: 'Primary-Rounded' | 'Secondary-Rounded' | 'Primary-Square' | 'Secondary-Square' | 'Third-Square' | 'With-Gradient';

  buttonClicked: EventEmitter<Identifier>;

  buttonClickedHandler() {
    alert('Button Clicked')
  }

  render() {
    return (
      <Host>
        <button class={`button ${this.size} ${this.type}`} onClick={this.buttonClickedHandler.bind(this)}>
          {this.label && this.label}
          <slot />
        </button>
      </Host>);
  }
}
