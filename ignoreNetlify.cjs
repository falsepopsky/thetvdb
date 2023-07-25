process.exitCode = process.env.BRANCH.includes('changeset-release') ? 0 : 1;
