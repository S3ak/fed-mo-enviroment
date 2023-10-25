import joker from 'give-me-a-joke';

export default function dadJoke() {
  return new Promise((resolve) => {
    joker.getRandomDadJoke(resolve);
  });
}
