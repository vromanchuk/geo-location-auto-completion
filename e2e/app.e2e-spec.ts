import { GeoLocationAutocompletionPage } from './app.po';

describe('geo-location-autocompletion App', function() {
  let page: GeoLocationAutocompletionPage;

  beforeEach(() => {
    page = new GeoLocationAutocompletionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
