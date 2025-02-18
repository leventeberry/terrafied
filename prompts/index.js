import { input, select } from "@inquirer/prompts";

export async function getOS() {
    const os = await select(
        {
            message: "Choose an operating system:",
            choices: [
                {
                    name: 'linux',
                    value: 'linux',
                    description: 'Linux is a family of open-source Unix-like operating systems'
                },
                {
                    name: 'macos',
                    value: 'macos',
                    description: 'macOS is a proprietary graphical operating system developed and marketed by Apple Inc.'
                },
                {
                    name: 'windows',
                    value: 'windows',
                    description: 'Microsoft Windows is a group of several graphical operating system families'
                }
            ],
            default: 'linux'
        }
    );
    return os;
}

export async function getProjectName() {
    const projectName = await input({ message: "Enter a project name:", default: 'terraform_project' });
    return projectName;
}

export async function getProvider() {
    const provider = await select(
        {
            message: "Choose a provider:",
            choices: [
                {
                    name: 'aws',
                    value: 'aws',
                    description: 'AWS is the most popular cloud provider',
                },
                {
                    name: 'google',
                    value: 'google',
                    description: 'Google Cloud Platform is a suite of cloud computing services',
                },
                {
                    name: 'azurerm',
                    value: 'azurerm',
                    description: 'Microsoft Azure is a cloud computing service created by Microsoft'
                }
            ],
            default: 'aws'
        }
    );
    return provider;
}

export async function getRegion() {
    const region = await input({ message: "Enter region:", default: 'us-east-1' });
    return region;
}

export async function getBucketName() {
    const bucketName = await input({ message: "Enter bucket name:", default: 'my-example-bucket' });
    return bucketName;
}

export async function getBucketAcl() {
    const acl = await select(
        {
            message: "Choose a bucket ACL:",
            choices: [
                {
                    name: 'private',
                    value: 'private',
                    description: 'The owner has full control. No one else has access'
                },
                {
                    name: 'public-read',
                    value: 'public-read',
                    description: 'The owner has full control. The bucket is public, but objects are private'
                },
                {
                    name: 'public-read-write',
                    value: 'public-read-write',
                    description: 'The owner has full control. The bucket is public, and objects are public'
                }
            ],
            default: 'private'
        }
    );
    return acl;
}

export async function getBucketRegion() {
    const region = await input({ message: "Enter region:", default: 'us-east-1' });
    return region;
}

export async function getBucketForceDestroy() {
    const forceDestroy = await select(
        {
            message: "Choose whether to force destroy the bucket:",
            choices: [
                {
                    name: 'true',
                    value: 'true',
                    description: 'The bucket will be destroyed regardless of its contents'
                },
                {
                    name: 'false',
                    value: 'false',
                    description: 'The bucket will not be destroyed if it contains objects'
                }
            ],
            default: 'false'
        }
    );
    return forceDestroy;
}

export async function getBucketVersioning() {
    const versioning = await select(
        {
            message: "Choose whether to enable versioning for the bucket:",
            choices: [
                {
                    name: 'true',
                    value: 'true',
                    description: 'Enables versioning for the bucket'
                },
                {
                    name: 'false',
                    value: 'false',
                    description: 'Disables versioning for the bucket'
                }
            ],
            default: 'false'
        }
    );
    return versioning;
}

export async function getBucketTags() {
    const tags = await input({ message: "Enter tags (key=value,key=value):" });
    return tags;
}