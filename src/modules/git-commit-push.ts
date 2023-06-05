import { simpleGit } from "simple-git";

async function commitAndPush(
  pathRepository: string,
  commitMessage: string
): Promise<void> {
  if (!Validate(pathRepository, commitMessage)) {
    return;
  }

  const git = simpleGit(pathRepository);

  await git.add("./*");
  await git.commit(commitMessage);
  await git.push();

  console.log("Changes committed and pushed successfully.");
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

export default commitAndPush;
