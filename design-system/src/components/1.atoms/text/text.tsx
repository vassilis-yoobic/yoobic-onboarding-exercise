import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'cu-text',
  styleUrl: 'text.css',
})

export class CustomText implements ComponentInterface {
  @Prop() content!: string;
  @Prop() size?: number = 14;
  @Prop() color?: string = '#03060b';



  render() {
    return (
      <Host>
        <div class="text" style={{color: this.color, fontSize: this.size + 'px' }}>
        {this.content}
        </div>
      </Host>);
  }
}
