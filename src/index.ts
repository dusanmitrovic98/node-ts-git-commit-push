// Copyright (c) 2023 Dusan Mitrovic (BK2O198)

import dotenv from "dotenv";

import commitAndPush, {
  addExceptionForDirectory,
} from "./modules/git-commit-push.js";
import prompt from "./utility/prompt.js";

dotenv.config();

const PATH_REPOSITORY: string = process.env.PATH_REPOSITORY || "";
const QUESTION: string = "Use .env commit message? [y/n]: ";
const DEFAULT_COMMIT_MESSAGE: string = "Update";

await addExceptionForDirectory(PATH_REPOSITORY);

await prompt(QUESTION, {
  y: () => {
    commitAndPush(PATH_REPOSITORY, process.env.COMMIT_MESSAGE || "");
  },
  n: () => {
    commitAndPush(PATH_REPOSITORY, DEFAULT_COMMIT_MESSAGE);
  },
});
