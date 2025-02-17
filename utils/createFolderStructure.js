import fs from 'fs/promises';
import path from 'path';

export default async function createFolderStructure(projectName) {
    const baseDir = path.join(process.cwd(), '..', projectName);

    await fs.mkdir(baseDir, { recursive: true });
    await fs.mkdir(path.join(baseDir, 'modules'), { recursive: true });
    await fs.mkdir(path.join(baseDir, 'environments/dev'), { recursive: true });
    await fs.mkdir(path.join(baseDir, 'environments/prod'), { recursive: true });
  
    return baseDir;
  }