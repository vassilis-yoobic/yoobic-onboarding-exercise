import { newSpecPage } from "@stencil/core/testing";

import { CustomText } from "./text";

describe('1.atoms/text', () => {
  describe('rendering', () => {
    let page;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [CustomText],
        html: '<cu-text>Test</cu-text>'
      })
    });
    describe('props', () => {
      it('should render', async () => {
        expect(page.root).toMatchSnapshot();
      })
      it('should render with different color', async () => {
        page.root.color = '#123456';
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
      })
      it('should render with different font size', async () => {
        page.root.size = '18px';
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
      })
    })
  })
})
