import fs from 'fs/promises';
import path from 'path';

export default async function createTerraformFiles(baseDir, config) {
    const mainTf = `resource "aws_instance" "example" {
  ami           = "ami-053a45fff0a704a47"
  instance_type = "t2.micro"
  tags = {
    Name = "example-instance"
  }
}`;
  
    const variablesTf = `variable "region" {
    description = "AWS region"
    type        = string
    default     = "${config.region}"
  }`;
  
    const providerTf = `terraform {
    required_providers {
      ${config.provider} = {
        source  = "hashicorp/${config.provider}"
        version = "~> 5.87.0"
      }
    }
  }
  
  provider "${config.provider}" {
    profile = "YOUR_AWS_PROFILE"
    region = var.region
  }`;
  
    await fs.writeFile(path.join(baseDir, 'main.tf'), mainTf);
    await fs.writeFile(path.join(baseDir, 'variables.tf'), variablesTf);
    await fs.writeFile(path.join(baseDir, 'provider.tf'), providerTf);
  }