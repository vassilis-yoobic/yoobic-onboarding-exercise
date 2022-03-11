import { Component, ComponentInterface, h, Host, Prop} from '@stencil/core';

import { Identifier } from '../../shared/identifier';
import { Tab } from '../../shared/tab';

@Component({
  tag: 'nav-tabs',
  styleUrl: 'navbar.css',
  assetsDirs: ['assets'],
})
export class NavBar implements ComponentInterface {
  @Prop() identifier?: Identifier = 'tabs';
  @Prop() tabs: Tab[] = [];

  render() {
    return (
      <Host>
        <div class="navbar-wrapper">
          {this.tabs.map((t) => (
            <cu-link href={t.href}>
                {...t.icon !== undefined && (
                  <st-image src={`${t.icon}`}>
                  </st-image>
                )}
                {...t.title !== undefined && (
                <cu-text
                  content={t.title}>
                </cu-text>
                )}
            </cu-link>
          ))}
        </div>
      </Host>
    );
  }
}
