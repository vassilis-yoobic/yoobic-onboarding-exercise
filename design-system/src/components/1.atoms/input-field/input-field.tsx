import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'st-input',
  styleUrl: 'input-field.css',
})

export class InputField implements ComponentInterface {
  @Prop() identifier?: Identifier = 'input';
  @Prop() name?: string;
  @Prop() type?: string;
  @Prop() placeholder?: string;

  render() {
    return (
      <Host>
        <input name={`${this.name}`} type={`${this.type}`} placeholder={`${this.placeholder}`} class="input" aria-label={`${this.type}`} required></input>
      </Host>);
  }
}
