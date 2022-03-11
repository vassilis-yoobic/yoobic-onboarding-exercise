import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';
import { Tab } from '../../shared/tab';

@Component({
  tag: 'cu-header',
  styleUrl: 'header.css',
  assetsDirs: ['assets'],
})
export class CuHeader implements ComponentInterface {
  @Prop() identifier?: Identifier = 'header';
  @Prop() tabs: Tab[] = [];

  render() {
    return (
      <Host>
          <div class="top-header">
            <div class="header-container">
              <st-image identifier='img' src='static/media/src/assets/ionic.png' alt='Ionic Logo' size='Medium'></st-image>
              <cu-text content='See how Stencil fits into the entire Ionic Ecosystem' size={12} color='#ccc'></cu-text>
            </div>
          </div>
          <div class="bottom-header">
            <div class="header-container">
              <st-image identifier="img" src="static/media/src/assets/stencil.png" alt="Stencil Logo" size="Medium"></st-image>
              <nav-tabs identifier="nav-tab" tabs={this.tabs}></nav-tabs>
            </div>
          </div>
      </Host>
    );
  }
}
