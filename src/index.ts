// Copyright (c) 2023 Dusan Mitrovic (BK2O198)

import dotenv from "dotenv";

import commitAndPush, {
  addExceptionForDirectory,
} from "./modules/git-commit-push/git-commit-push.js";
import prompt from "./utility/prompt/prompt.js";

dotenv.config();

const PATH_REPOSITORY: string = process.env.PATH_REPOSITORY || "";
const QUESTION: string = "Use .env commit message? [y/n]: ";
const DEFAULT_COMMIT_MESSAGE: string = "Update";

async function main() {
  await addExceptionForDirectory(PATH_REPOSITORY);

  console.log("Exception added for the directory.");

  await prompt(QUESTION, {
    y: () => {
      commitAndPush(PATH_REPOSITORY, process.env.COMMIT_MESSAGE || "");
    },
    n: () => {
      commitAndPush(PATH_REPOSITORY, DEFAULT_COMMIT_MESSAGE);
    },
  });
}

main().catch((error) => {
  console.error("An error occurred:", error);
});
