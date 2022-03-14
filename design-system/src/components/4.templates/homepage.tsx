import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Advantage } from '../shared/advantage';
import { Identifier } from '../shared/identifier';
import { Tab } from '../shared/tab';

@Component({
  tag: 'my-homepage',
  styleUrl: 'homepage.css',
  assetsDirs: ['assets'],
})
export class Homepage implements ComponentInterface {
  @Prop() identifier?: Identifier = 'homepage';
  @Prop() tabs: Tab[] = [];
  @Prop() advantages: Advantage[] = [];

  render() {
    return (
      <Host>
          <cu-header identifier="header" tabs={this.tabs}></cu-header>
          <div class="first-section">
            <div class="left">
              <my-btn identifier="button" label="Register now • Stencil Enterprise Webinar: Design Systems at Scale" size="Small" type="With-Gradient"></my-btn>
              <cu-text class="" content="Build. Customize. Distribute. Adopt." size={64} color="#03060b"></cu-text>
              <cu-text class="" content="Stencil is a toolchain for building reusable, scalable Design Systems. Generate small, blazing fast, and 100% standards based Web Components that run in every browser." size={20} color="#2d4665"></cu-text>
              <div class="btns-wrapper">
                <my-btn identifier="button" label="get started" size="Medium" type="Primary-Rounded"></my-btn>
                <my-btn identifier="button" label="why stencil ?" size="Medium" type="Secondary-Rounded"></my-btn>
              </div>
            </div>
            <div class="right">
              <svg class="landing-page__bg" width="661" height="573" viewBox="0 0 661 573" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M301.972 460.59H459.711L374.445 553H217.555L301.972 460.59Z" fill="#EFF1FF"></path><path opacity="0.4" d="M585.269 95.2073H660.886L620.011 140.163H544.801L585.269 95.2073Z" fill="#EBEEFF"></path><path opacity="0.5" d="M90.1233 373.915H177.864L130.436 426.012H43.1665L90.1233 373.915Z" fill="#F4F6FF"></path><path opacity="0.7" d="M245.223 357.66H464.593L346.012 485.785H127.822L245.223 357.66Z" fill="#EBEEFF"></path><path opacity="0.6" d="M532.162 232.02H654.938L588.571 304.449H466.456L532.162 232.02Z" fill="#EFF1FF"></path><path opacity="0.5" d="M536.924 369.634H612.541L571.666 414.59H496.456L536.924 369.634Z" fill="#F4F6FF"></path><path opacity="0.4" d="M113.243 107.654H188.86L147.985 152.61H72.7747L113.243 107.654Z" fill="#EBEEFF"></path><path opacity="0.5" d="M330.845 158.854H477.2L398.087 245.02H252.519L330.845 158.854Z" fill="#F4F6FF"></path><path opacity="0.5" d="M508.327 0H636L566.986 75H440L508.327 0Z" fill="#F4F6FF"></path><path opacity="0.5" d="M64.4925 502H185L119.859 573H0L64.4925 502Z" fill="#F4F6FF"></path><path opacity="0.7" d="M602.805 205.808H152.133L33.6135 333.933H484.286L602.805 205.808Z" fill="#EBEEFF"></path><path opacity="0.7" d="M293.465 53.9561H512.026L393.989 182.081H175.254L293.465 53.9561Z" fill="#E6EAFF"></path><path opacity="0.43" d="M273.266 9H374.089L319.589 67.6927H219.309L273.266 9Z" fill="#F4F6FF"></path></svg>
            </div>
            <cu-text class="bottom-heading" content="Powering design systems and cross-framework components at" size={20} color="#03060b"></cu-text>
            <div class="img-grid">
              <st-image identifier="img" src="static/media/src/assets/apple.png" alt="Apple icon" size="Medium"></st-image>
              <st-image identifier="img" src="static/media/src/assets/amazon.png" alt="Amazon Logo" size="Medium"></st-image>
              <st-image identifier="img" src="static/media/src/assets/porsche.png" alt="Porshe Logo" size="Medium"></st-image>
              <st-image identifier="img" src="static/media/src/assets/arm.png" alt="Arm icon" size="Medium"></st-image>
              <st-image identifier="img" src="static/media/src/assets/panera.png" alt="Panera icon" size="Medium"></st-image>
              <st-image identifier="img" src="static/media/src/assets/microsoft.png" alt="Microsoft icon" size="Medium"></st-image>
            </div>
          </div>
          <hr/>
          <div class="second-section">
            <f-heading content="The magical, reusable web component compiler." following_text="Start building in seconds." color="#03060b" color2="#7a798d" size={32}></f-heading>
            <ul>
              <li-checked identifier="li" label="Web Component-based" size="Small"></li-checked>
              <li-checked identifier="li" label="Asynchronous rendering pipeline" size="Small"></li-checked>
              <li-checked identifier="li" label="TypeScript suppor" size="Small"></li-checked>
              <li-checked identifier="li" label="One-way Data Binding" size="Small"></li-checked>
              <li-checked identifier="li" label="Component prerendering" size="Small"></li-checked>
              <li-checked identifier="li" label="Simple component lazy-loading" size="Small"></li-checked>
              <li-checked identifier="li" label="JSX support" size="Small"></li-checked>
              <li-checked identifier="li" label="Dependency-free components" size="Small"></li-checked>
            </ul>
          </div>
          <div class="grey-section">
            <cu-text content="Getting started is simple:" size={20} color="#03060b"></cu-text>
            <my-btn identifier="button" label="$ npm init stencil" size="Medium" type="Third-Square"></my-btn>
            <cu-text content="Requires NPM v6" size={11} color="#2d4665"></cu-text>
            <cu-text content="Dive deeper with our Getting Started guide" size={13} color="#2d4665"></cu-text>
          </div>
          <div class="third-section">
            <div class="container">
              <f-heading content="Stencil doesn’t fight the web platform." following_text="It embraces it." color="#03060b" color2="#7a798d" size={32}></f-heading>
              <grid-advantage advantages={this.advantages}></grid-advantage>
            </div>
          </div>
          <div class="fourth-section">
            <div class="row">
              <f-heading content="The perfect tool for" following_text="building a design system." color="#7a798d" color2="#03060b" size={32}></f-heading>
              <div class="right">
                <ul>
                  <li-checked identifier="li" label="Ensure consistent UX and brand experiences, at scale" size="Medium"></li-checked>
                  <li-checked identifier="li" label="Web components run on any platform or device" size="Medium"></li-checked>
                  <li-checked identifier="li" label="Build a custom UI library that works across teams and projects" size="Medium"></li-checked>
                </ul>
                <cu-text content="Interested in learning more about building design systems with Stencil?" size={17} color="#03060b"></cu-text>
                <my-btn identifier="button" label="show me more" size="Small" type="Secondary-Square"></my-btn>
              </div>
            </div>
            <div class="row">
              <f-heading content="Awesome developer experience" following_text="out of the box." color="#03060b" color2="#7a798d" size={32}></f-heading>
              <div class="right">
                <ul>
                  <li-checked identifier="li" label="Built-in dev-server for hot module reloading" size="Medium"></li-checked>
                  <li-checked identifier="li" label="Screenshot visual UI diffs" size="Medium"></li-checked>
                  <li-checked identifier="li" label="Auto-generate component documentation (including css variables)" size="Medium"></li-checked>
                </ul>
              </div>
            </div>
            <div class="row">
              <f-heading content="Build one component library" following_text="for all of your apps." color="#03060b" color2="#7a798d" size={32}></f-heading>
              <div class="right">
                <cu-text content="Stencil components are just Web Components, so they work with any major framework or no framework at all." size={17} color="#03060b"></cu-text>
                <cu-text content="Learn how Stencil seamlessly integrates with:" size={17} color="#03060b"></cu-text>
              </div>
            </div>
          </div>
          <sub-section identifier="sub-form"></sub-section>
          <cu-footer identifier="footer"></cu-footer>
          <div class="cards-wrapper">
            <cu-card></cu-card>
          </div>
      </Host>
    );
  }
}
