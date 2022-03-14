import { Component, ComponentInterface, h, Host, Prop} from '@stencil/core';

import { Frameworks } from '../../shared/frameworks';
import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'card-grid',
  styleUrl: 'card_grid.css',
  assetsDirs: ['assets'],
})
export class CardGrid implements ComponentInterface {
  @Prop() identifier?: Identifier = 'frameworks';
  @Prop() frameworks: Frameworks[] = [];

  render() {
    return (
      <Host>
        <div class="frameworks-wrapper">
          {this.frameworks.map((f) => (
            <cu-card>
              <cu-link href={f.href}>
                {...f.icon !== undefined && (
                  <st-image src={`${f.icon}`}>
                  </st-image>
                )}
                {...f.title !== undefined && (
                <cu-text
                  content={f.title}>
                </cu-text>
                )}
              </cu-link>
            </cu-card>
          ))}
        </div>
      </Host>
    );
  }
}
