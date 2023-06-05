import { simpleGit } from "simple-git";

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
  const git = simpleGit(pathRepository);

  git
    .raw(["config", "--global", "--add", "safe.directory", pathRepository])
    .then(() => {
      console.log("Exception added for the directory.");
    })
    .catch((error) => {
      console.error("Error adding exception:", error);
    });
}

function Validate(pathRepository: string, commitMessage: string): boolean {
  if (pathRepository == "" || pathRepository == undefined) {
    console.log("Repository path not specified.");
    return false;
  }

  if (commitMessage == "" || commitMessage == undefined) {
    console.log("Commit message not specified.");
    return false;
  }

  return true;
}

export { addExceptionForDirectory };

export default commitAndPush;
