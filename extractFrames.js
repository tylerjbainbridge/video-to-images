const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const extractFrames = async ({ prefix, input, fps = '1/5' }) => {
  const outputPath = `./output/${prefix}`;

  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }

  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .on('end', resolve)
      .on('error', reject)
      .output(`${outputPath}/screenshot-%04d.jpg`)
      .outputOptions('-q:v', '0', '-vf', `fps=${fps}`)
      .run();
  });
};

module.exports = extractFrames;
