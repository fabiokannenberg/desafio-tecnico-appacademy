const { dataProcessor } = require('./dataProcessor');
const { calculateStatistics } = require('./calculateStatistics');
const { printStatistics } = require('./printStatistics');
const { createSortedCSVFile } = require('./createSortedCSVFile');
const { findInstructor } = require('./findInstructor');

const csvFileUrl = './AppAcademy_Candidates.csv';

const myApp = () => {
  const [headings, data] = dataProcessor(csvFileUrl);

  const stats = calculateStatistics(data);

  printStatistics(stats);

  createSortedCSVFile(headings, data);

  findInstructor(data);
};

myApp();
