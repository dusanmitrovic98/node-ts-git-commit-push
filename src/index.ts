// Copyright (c) 2023 Dusan Mitrovic (BK2O198)

import dotenv from "dotenv";

import commitAndPush from "./modules/git-commit-push.js";

dotenv.config();

const pathRepository: string = "";
const commitMessage: string = "";

commitAndPush(pathRepository, commitMessage);
