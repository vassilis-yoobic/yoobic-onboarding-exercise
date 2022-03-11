import { Component, ComponentInterface, h, Host, Prop} from '@stencil/core';

@Component({
  tag: 'f-heading',
  styleUrl: 'f_heading.css',
})
export class FullHeading implements ComponentInterface {
  @Prop() content!: string;
  @Prop() following_text!: string;
  @Prop() color?: string = '#03060b';
  @Prop() color2?: string = '#7a798d';
  @Prop() size?: number = 32;

  render() {
    return (
      <Host>
          <div class="heading" style={{ color: this.color, fontSize: this.size + 'px' }}>
            {this.content} <span style={{color: this.color2}}>{this.following_text}</span>
          </div>
      </Host>
    );
  }
}
