import { Selector } from 'testcafe';

fixture `Getting Started`
  .page `http://devexpress.github.io/testcafe/example`;

test('example test', async t => {
  await t
    .typeText('#developer-name', 'Taylor Smith')
    .click('#submit-button')
    .expect(Selector('#article-header').innerText).eql('Thank you, Taylor Smith!');
});
