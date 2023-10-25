import dadJoke from './mycode';

export default async function testDadJoke() {
  const joke = await dadJoke();
  const testPasses = Boolean(joke);
  // eslint-disable-next-line no-console
  console.log(joke);
  // eslint-disable-next-line no-console
  console.log('Dad Joke Test:', testPasses ? 'PASSED' : 'FAILED');
  return testPasses;
}

testDadJoke();
