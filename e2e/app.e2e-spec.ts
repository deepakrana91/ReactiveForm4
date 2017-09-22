import { ReactiveForm3Page } from './app.po';

describe('reactive-form3 App', () => {
  let page: ReactiveForm3Page;

  beforeEach(() => {
    page = new ReactiveForm3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
