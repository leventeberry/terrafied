import fs from 'fs/promises';
import path from 'path';

export default async function createTerraformFiles(baseDir, config) {
    const mainTf = `provider "${config.provider}" {
    region = "${config.region}"
  }
  
  resource "aws_s3_bucket" "example" {
    bucket = "my-example-bucket"
    acl    = "private"
  }`;
  
    const variablesTf = `variable "region" {
    description = "AWS region"
    type        = string
  }`;
  
    const providerTf = `terraform {
    required_providers {
      ${config.provider} = {
        source  = "hashicorp/${config.provider}"
        version = "~> 3.0"
      }
    }
  }
  
  provider "${config.provider}" {
    region = var.region
  }`;
  
    await fs.writeFile(path.join(baseDir, 'main.tf'), mainTf);
    await fs.writeFile(path.join(baseDir, 'variables.tf'), variablesTf);
    await fs.writeFile(path.join(baseDir, 'provider.tf'), providerTf);
  }