import { newSpecPage } from "@stencil/core/testing";

import { Image } from './image'

describe('1.atoms/images', () => {
  describe('rendering', () => {
    let page;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [Image],
        html: '<st-image />'
      })
    })
    describe('props', () => {
      it('should render', () => {
        expect(page.root).toMatchSnapshot();
      })
      it('should render with small size', async () => {
        page.root.size = 'small';
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
      })
    })
  })
})
