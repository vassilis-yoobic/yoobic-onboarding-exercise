import { newSpecPage } from '@stencil/core/testing';

import { MyBtn } from './button';

describe('1.atoms/button', () => {
  describe('rendering', () => {
    let page;

    beforeEach(async () => {
      page = await newSpecPage({
        components: [MyBtn],
        html: '<my-btn>Test</my-btn>'
      });
    });
    describe('props', () => {
      it('should render a button with default attributes', async () => {
        expect(page.root).toMatchSnapshot();
      })
      it('should render a small button', async () => {
        page.root.size = 'small';
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
      });
      it('should render a square button', async () => {
        page.root.type = 'Primary-Square';
        await page.waitForChanges();
        expect(page.root).toMatchSnapshot();
      });
    })
    describe('events', () => {
      it('should fire a click event when enabled', async () => {
        const onClick = jest.fn();
        page.root.addEventListener('click', onClick);
        await page.waitForChanges();
        page.root.click();
        expect(onClick).toHaveBeenCalled();
      });
    })
  });
});
