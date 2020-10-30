const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const extractFrames = async ({ output, input, fps = '1/5' }) => {
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
  }

  return new Promise((resolve, reject) => {
    ffmpeg(input)
      .on('end', resolve)
      .on('error', reject)
      .output(`${output}/screenshot-%04d.jpg`)
      .outputOptions('-q:v', '0', '-vf', `fps=${fps}`)
      .run();
  });
};

module.exports = extractFrames;
