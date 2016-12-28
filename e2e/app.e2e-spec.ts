import { ResumeWebsitePage } from './app.po';

describe('resume-website App', function() {
  let page: ResumeWebsitePage;

  beforeEach(() => {
    page = new ResumeWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
