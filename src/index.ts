// Copyright (c) 2023 Dusan Mitrovic (BK2O198)

import dotenv from "dotenv";

import commitAndPush from "./modules/git-commit-push.js";

dotenv.config();

const pathRepository: string = process.env.PATH_REPOSITORY || "";
const commitMessage: string = process.env.COMMIT_MESSAGE || "";

// commitAndPush(pathRepository, commitMessage);
