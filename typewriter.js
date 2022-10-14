const typewriter = () => {
  let delayTime = 0;
  
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delayTime);

    delayTime += 50;
  }

  setTimeout(() => {
    process.stdout.write('\n');
  }, delayTime);
};

const sentence = "hello there from ligthouse labs";

typewriter(sentence);