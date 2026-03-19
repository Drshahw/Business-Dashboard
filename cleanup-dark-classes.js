const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Regex to find multiple dark: classes targeting the same property
  // e.g., dark:text-zinc-900 dark:text-white -> dark:text-white
  // e.g., dark:border-zinc-200 dark:border-white/10 -> dark:border-white/10
  // e.g., dark:hover:bg-zinc-100 dark:hover:bg-white/5 -> dark:hover:bg-white/5

  const regexes = [
    /dark:text-[a-z0-9-]+\s+(dark:text-[a-z0-9-\/]+)/g,
    /dark:bg-[a-z0-9-]+\s+(dark:bg-[a-z0-9-\/]+)/g,
    /dark:border-[a-z0-9-]+\s+(dark:border-[a-z0-9-\/]+)/g,
    /dark:hover:bg-[a-z0-9-]+\s+(dark:hover:bg-[a-z0-9-\/]+)/g,
    /dark:hover:text-[a-z0-9-]+\s+(dark:hover:text-[a-z0-9-\/]+)/g,
    /dark:hover:border-[a-z0-9-]+\s+(dark:hover:border-[a-z0-9-\/]+)/g,
  ];

  for (const regex of regexes) {
    content = content.replace(regex, '$1');
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned up ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      processFile(filePath);
    }
  }
}

walkDir('./components');
walkDir('./app');
