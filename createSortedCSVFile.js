const { writeFileSync } = require('fs');

const createSortedCSVFile = (headings, data) => {
  const sortedFileName = 'Sorted_AppAcademy_Candidates.csv';

  const sortedData = data.sort((candidatoA, candidatoB) => {
    return candidatoA.nome.localeCompare(candidatoB.nome);
  });

  const sortedDataString =
    headings.join(';') +
    '\r\n' +
    sortedData
      .map(
        (candidato) =>
          `${candidato.nome};${candidato.vaga};${candidato.idade} anos;${candidato.estado};`
      )
      .join('\r\n');

  console.log('Gerando lista ordenada por ordem alfabética...');
  try {
    writeFileSync(sortedFileName, sortedDataString, 'utf8');
    console.log(`Lista ordenada salva como: ${sortedFileName}\n `);
  } catch (error) {
    console.log('Não foi possível gerar a lista ordenada. \n');
  }
};

module.exports = { createSortedCSVFile };
