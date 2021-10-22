const { readFileSync } = require('fs');

const dataProcessor = (csvFileUrl) => {
  const csvToArray = (csvFileUrl) => {
    data = readFileSync(csvFileUrl, 'utf8')
      .split('\r\n')
      .map((candidato) => candidato.split(';'));
    return data;
  };

  const removeHeadingsFromArray = (array) => {
    return array.shift();
  };

  const mapIntoArrayOfObjects = (data, headings) => {
    const lowercaseHeadings = headings.map((heading) => heading.toLowerCase());
    return data.map((candidato) => {
      let object = {};
      for (let i = 0; i < candidato.length; i++) {
        object[lowercaseHeadings[i]] =
          lowercaseHeadings[i] === 'idade'
            ? Number(candidato[i].slice(0, 2))
            : candidato[i];
      }
      return object;
    });
  };

  const dataArray = csvToArray(csvFileUrl);
  const headings = removeHeadingsFromArray(dataArray);
  const finalData = mapIntoArrayOfObjects(dataArray, headings);

  return [headings, finalData];
};

module.exports = { dataProcessor };
