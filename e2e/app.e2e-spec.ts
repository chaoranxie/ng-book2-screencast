import { NgBook2ScreencastPage } from './app.po';

describe('ng-book2-screencast App', () => {
  let page: NgBook2ScreencastPage;

  beforeEach(() => {
    page = new NgBook2ScreencastPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
