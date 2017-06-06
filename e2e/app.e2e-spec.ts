import { AngularTestingExamplePage } from './app.po';

describe('angular-testing-example App', () => {
  let page: AngularTestingExamplePage;

  beforeEach(() => {
    page = new AngularTestingExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
