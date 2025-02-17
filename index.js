import chalk from 'chalk';
import { getProjectName, getProvider, getRegion } from './prompts/index.js';
import createFolderStructure from './utils/createFolderStructure.js';
import createTerraformFiles from './utils/createTerraformFiles.js';

async function main() {
  console.log(chalk.blue('Welcome to the Terraform Project Setup CLI\n'));

  const projectName = await getProjectName();
  const provider = await getProvider();
  const region = await getRegion();

  switch (provider) {
    case 'aws':
      console.log(chalk.green('You have selected AWS as the cloud provider'));
      break;
    case 'google':
      console.log(chalk.green('You have selected Google Cloud Platform as the cloud provider'));
      break;
    case 'azurerm':
      console.log(chalk.green('You have selected Microsoft Azure as the cloud provider'));
      break;
    default:
      console.log(chalk.red('Invalid provider'));
      process.exit(1);
  }

  const answers = {
    projectName,
    provider,
    region
  }

  const baseDir = await createFolderStructure(answers.projectName);
  await createTerraformFiles(baseDir, { provider: answers.provider, region: answers.region });

  console.log(chalk.green(`Terraform project '${answers.projectName}' has been created at ${baseDir}`));
  process.exit(0);
}

main().catch((err) => console.error(chalk.yellow('Error::'), chalk.red(err)));