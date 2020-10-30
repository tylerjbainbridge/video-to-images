const { program } = require('commander');

const extractFrames = require('./extractFrames.js');

program
  .option('-i, --input <val>', 'input path for file')
  .option('-o, --output <val>', 'output path')
  .option('-f, --fps <val>', 'how many frames per second to output')
  .parse(process.argv);

(async () => {
  console.log(`extracting frames from ${program.input}`);

  await extractFrames(program);

  console.log('done.');
})();
