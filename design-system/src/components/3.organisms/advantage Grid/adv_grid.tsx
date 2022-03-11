import { Component, ComponentInterface, h, Host, Prop} from '@stencil/core';

import { Advantage } from '../../shared/advantage';
import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'grid-advantage',
  styleUrl: 'adv_grid.css',
  assetsDirs: ['assets'],
})
export class GridAdvantage implements ComponentInterface {
  @Prop() identifier?: Identifier = 'grid-advantage';
  @Prop() advantages?: Advantage[] = [];

  render() {
    return (
      <Host class={`${this.identifier}`}>
        {this.advantages.map((a) => (
          <single-advantage icon={a.icon} adv_title={a.adv_title} text={a.text}></single-advantage>
        ))}
      </Host>
    );
  }
}
