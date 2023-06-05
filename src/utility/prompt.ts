import readline from "readline";

async function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise<string>((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function getAnswer(question: string): Promise<string> {
  const response = await ask(question);

  return response.toLowerCase().trim();
}

async function prompt(
  question: string,
  config: { [key: string]: any }
): Promise<void> {
  const response: any = await getAnswer(question);

  let keys: string[] = Object.keys(config);

  keys.forEach((key) => {
    if (key == response) {
      config[key]();
    } else {
      console.log("Invalid response.");
    }
  });
}

export default prompt;
