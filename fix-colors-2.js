const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Fix hover:bg-zinc-100 dark:bg-zinc-900 -> hover:bg-zinc-100 dark:hover:bg-zinc-900
      content = content.replace(/hover:bg-zinc-100 dark:bg-zinc-900/g, 'hover:bg-zinc-100 dark:hover:bg-zinc-900');
      
      // Fix hover:bg-zinc-100 dark:bg-white\/5 -> hover:bg-zinc-100 dark:hover:bg-white/5
      content = content.replace(/hover:bg-zinc-100 dark:bg-white\/5/g, 'hover:bg-zinc-100 dark:hover:bg-white/5');

      // Also let's fix text-zinc-500 that didn't get dark mode because it wasn't in the previous script
      // Actually, text-zinc-500 is fine for both in many cases.
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'components', 'dashboard'));
processDir(path.join(__dirname, 'components', 'tabs'));
processDir(path.join(__dirname, 'components', 'ui'));
console.log('Done fixing');
