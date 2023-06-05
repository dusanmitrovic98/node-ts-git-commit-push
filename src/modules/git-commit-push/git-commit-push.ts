import { simpleGit } from "simple-git";
import { validateString } from "../../utility/string/string.js";

async function commitAndPush(
  pathRepository: string,
  commitMessage: string
): Promise<void> {
  if (!Validate(pathRepository, commitMessage)) {
    return;
  }

  console.log(pathRepository);
  const git = simpleGit(pathRepository);

  await git.add("./*");
  await git.commit(commitMessage);
  await git.push();

  console.log("Changes committed and pushed successfully.");
}

async function addExceptionForDirectory(pathRepository: string): Promise<void> {
  if (validateString(pathRepository)) {
    return;
  }

  const git = simpleGit(pathRepository);

  git
    .raw(["config", "--global", "--add", "safe.directory", pathRepository])
    .catch((error) => {
      console.error("Error adding exception:", error);
    });
}

function Validate(pathRepository: string, commitMessage: string): boolean {
  if (!validateString(pathRepository)) {
    console.log("Repository path not specified.");
    return false;
  }

  if (!validateString(commitMessage)) {
    console.log("Commit message not specified.");
    return false;
  }

  return true;
}

export { addExceptionForDirectory };

export default commitAndPush;
