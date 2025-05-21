const fs = require('fs');
const path = require('path');

const assetsDir = __dirname;
const outputFile = path.join(__dirname, 'assets.js');

const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg'];
const files = fs.readdirSync(assetsDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  return imageExtensions.includes(ext) && file !== 'assets.js' && file !== 'generateAssets.cjs';
});

let imports = '';
let exportBlock = 'export const assets = {\n';

files.forEach(file => {
  const ext = path.extname(file);
  const name = path.basename(file, ext).replace(/-/g, '_');
  imports += `import ${name} from './${file}';\n`;
  exportBlock += `  ${name},\n`;
});

exportBlock += '};\n';

fs.writeFileSync(outputFile, imports + '\n' + exportBlock);
console.log('✅ assets.js успешно сгенерирован!');
