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
      
      // bg-zinc-950 -> bg-white dark:bg-zinc-950
      content = content.replace(/\bbg-zinc-950\b/g, 'bg-white dark:bg-zinc-950');
      // bg-zinc-900/50 -> bg-zinc-50 dark:bg-zinc-900/50
      content = content.replace(/\bbg-zinc-900\/50\b/g, 'bg-zinc-50 dark:bg-zinc-900/50');
      // bg-zinc-900 -> bg-zinc-100 dark:bg-zinc-900
      content = content.replace(/\bbg-zinc-900(?![\/\w])/g, 'bg-zinc-100 dark:bg-zinc-900');
      // bg-zinc-800 -> bg-zinc-200 dark:bg-zinc-800
      content = content.replace(/\bbg-zinc-800\b/g, 'bg-zinc-200 dark:bg-zinc-800');
      
      // text-white -> text-zinc-900 dark:text-white
      content = content.replace(/\btext-white\b/g, 'text-zinc-900 dark:text-white');
      // text-zinc-200 -> text-zinc-800 dark:text-zinc-200
      content = content.replace(/\btext-zinc-200\b/g, 'text-zinc-800 dark:text-zinc-200');
      // text-zinc-300 -> text-zinc-700 dark:text-zinc-300
      content = content.replace(/\btext-zinc-300\b/g, 'text-zinc-700 dark:text-zinc-300');
      // text-zinc-400 -> text-zinc-500 dark:text-zinc-400
      content = content.replace(/\btext-zinc-400\b/g, 'text-zinc-500 dark:text-zinc-400');
      
      // border-white/5 -> border-zinc-200 dark:border-white/5
      content = content.replace(/\bborder-white\/5\b/g, 'border-zinc-200 dark:border-white/5');
      // border-white/10 -> border-zinc-200 dark:border-white/10
      content = content.replace(/\bborder-white\/10\b/g, 'border-zinc-200 dark:border-white/10');
      
      // hover:bg-zinc-900 -> hover:bg-zinc-100 dark:hover:bg-zinc-900
      content = content.replace(/\bhover:bg-zinc-900\b/g, 'hover:bg-zinc-100 dark:hover:bg-zinc-900');
      // hover:bg-white/5 -> hover:bg-zinc-100 dark:hover:bg-white/5
      content = content.replace(/\bhover:bg-white\/5\b/g, 'hover:bg-zinc-100 dark:hover:bg-white/5');
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

processDir(path.join(__dirname, 'components', 'dashboard'));
processDir(path.join(__dirname, 'components', 'tabs'));
processDir(path.join(__dirname, 'components', 'ui'));
console.log('Done');
