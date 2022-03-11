import { newSpecPage } from "@stencil/core/testing";

import { CustomLink } from "./link";

describe('1.atoms/link', () => {
  describe('rendering', () => {
    let page;

    beforeEach(async() => {
      page = await newSpecPage({
        components: [CustomLink],
        html: '<cu-link href="test">Test</cu-link>'
      })
    })

    describe('props', () => {
      it('should render', async () => {
        expect(page.root).toMatchSnapshot();
      })
      it('should render image only', async () => {
        expect(page.root).toMatchSnapshot();
      })
    })
  })
})
