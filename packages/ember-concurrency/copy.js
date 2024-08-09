const fs = require('fs-extra');
const path = require('path');

const source = path.resolve(__dirname, 'src/index.d.ts');
const destination = path.resolve(__dirname, 'declarations/index.d.ts');

fs.mkdirSync(path.dirname(destination), { recursive: true });
fs.copyFileSync(source, destination);
console.log(`Copied ${source} to ${destination}`);

async function moveFiles() {
    try {
      const distDir = path.resolve(__dirname, '../../dist');
      const declarationsDir = path.resolve(__dirname, '../../declarations');
  
      // Move dist
      await fs.move(path.resolve(__dirname, 'dist'), distDir, { overwrite: true });
  
      // Move declarations
      await fs.move(path.resolve(__dirname, 'declarations'), declarationsDir, { overwrite: true });
  
      console.log('Files moved successfully');
    } catch (err) {
      console.error('Error moving files:', err);
      process.exit(1);
    }
  }
  
  moveFiles();
