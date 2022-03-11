import { Component, ComponentInterface, h, Host,Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'sub-form',
  styleUrl: 'sub_form.css',
})

export class SubscribeForm implements ComponentInterface {
  @Prop() identifier?: Identifier = 'sub-form';

  render() {
    return (
      <Host>
        <form action="POST" class={`${this.identifier}`}>
          <st-input identifier="input" name="email" type="email" placeholder="Email Address"></st-input>
          <my-btn identifier="button" label="subscribe" size="Medium" type="Primary-Square"></my-btn>
        </form>
      </Host>
    );
  }
}
