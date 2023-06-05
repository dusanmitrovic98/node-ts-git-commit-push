import { simpleGit } from "simple-git";

async function commitAndPush(
  pathRepository: string,
  commitMessage: string
): Promise<void> {
  const git = simpleGit(pathRepository);

  await git.add("./*");
  await git.commit(commitMessage);
  await git.push();

  console.log("Changes committed and pushed successfully.");
}

export default commitAndPush;
