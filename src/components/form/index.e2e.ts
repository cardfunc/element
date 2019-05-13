import { newE2EPage } from '@stencil/core/testing';

describe('card3-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<card3-form></card3-form>');
    const element = await page.find('card3-form');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<card3-form></card3-form>');
    const component = await page.find('card3-form');
    const element = await page.find('card3-form >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
