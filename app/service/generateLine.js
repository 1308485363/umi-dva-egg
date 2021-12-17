const Service = require('egg').Service;
const fs = require('fs');
const sourceMap = require('source-map');

class generateLine extends Service {
  // Get file content
  readFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileContent.toString());
  }

  // Find the source location
  async searchSource(filePath, line, column) {
    const rawSourceMap = this.readFile(filePath);
    const consumer = await new sourceMap.SourceMapConsumer(rawSourceMap);
    const res = await consumer.originalPositionFor({
      line: Number(line),
      column: Number(column),
    });

    // res.content = await consumer.sourceContentFor(res.source)
    // consumer.destroy()
    // console.log(res, 'res:::::', filePath, line, column)
    return res;
  }
}

module.exports = generateLine;
