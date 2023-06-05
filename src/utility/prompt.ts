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
  config?: { [key: string]: any }
): Promise<void> {
  const response: any = await getAnswer(question);

  if (!config) {
    if (response === "y") {
      console.log('User responded with "yes"');
    } else if (response === "n") {
      console.log('User responded with "no"');
    } else {
      console.log("Invalid response");
    }

    return;
  }

  let keys: string[] = Object.keys(config);

  const isValidResponse = keys.includes(response);

  if (isValidResponse) {
    config[response]();
  } else {
    console.log("Invalid response.");
  }
}

export default prompt;
