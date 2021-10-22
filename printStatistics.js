const printStatistics = ([
  percentageOfApplicantsQA,
  percentageOfApplicantsIOS,
  percentageOfApplicantsAPINET,
  averageAgeOfApplicantsQA,
  sumOfAgesAPINET,
  uniqueStatesArray,
  oldestApplicantsIOS,
  youngestApplicantsAPINET,
]) => {
  console.log('Proporção de candidatos por vaga:');
  console.log(`API .NET: ${percentageOfApplicantsAPINET}%`);
  console.log(`iOS: ${percentageOfApplicantsIOS}%`);
  console.log(`QA: ${percentageOfApplicantsQA}%\n`);
  console.log(
    `Média de idade dos candidatos de QA: ${averageAgeOfApplicantsQA} anos. \n`
  );
  console.log(
    `O(A) candidato(a) mais velho(a) entre os candidatos de iOS é ${oldestApplicantsIOS.nome}, de ${oldestApplicantsIOS.idade} anos. \n`
  );
  console.log(
    `O(A) candidato(a) mais novo(a) entre os candidatos de API .NET é ${youngestApplicantsAPINET.nome}, de ${youngestApplicantsAPINET.idade} anos. \n`
  );
  console.log(
    `Soma da idade de todos os candidatos do API .NET: ${sumOfAgesAPINET}. \n`
  );
  console.log(
    `Há ${uniqueStatesArray.length} estados distintos: ${uniqueStatesArray
      .slice(0, uniqueStatesArray.length - 1)
      .join(', ')} e ${uniqueStatesArray[uniqueStatesArray.length - 1]}.\n`
  );
};

module.exports = { printStatistics };
