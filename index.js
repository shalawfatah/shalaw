#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');

welcome({
    title: pkgJSON.name,
    tagLine: `👋 I'm Shalaw`,
    version: pkgJSON.version,
    description: pkgJSON.description,
    bgColor: `#FADC00`,
    color: `#000000`,
    bold: true,
    clear: true,
})

console.log(`
👋 I'm Shalaw, a web developer focusing on ${chalk.bgBlue.bold(' frontend ')} & ${chalk.bgGreen.bold(' tea ')}. 
I'm a passionate self-taught web developer with years of experience, 
focusing on the frontend, especially Javascript & React. 
${chalk.italic("It's important that we ship functional and and user-friendly products that benefit people.")}

📖 Github: https://github.com/shalawfatah
👨‍🎓 LinkedIn: https://linkedin.com/in/shalawfatah
🪐 Website: https://shalaw.tech

`)