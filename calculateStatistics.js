const calculateStatistics = (data) => {
  const candidatosQA = data.filter((candidato) => candidato.vaga === 'QA');
  const candidatosIOS = data.filter((candidato) => candidato.vaga === 'iOS');
  const candidatosAPINET = data.filter(
    (candidato) => candidato.vaga === 'API .NET'
  );

  const calculateApplicantsPercentage = (
    applicantsNumber,
    totalApplicantsNumber
  ) => {
    return Math.round((applicantsNumber / totalApplicantsNumber) * 10000) / 100;
  };

  const sumArrayValues = (array) => {
    return array.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  const calculateArrayValuesAverage = (array) => {
    const average = sumArrayValues(array) / array.length;
    return Math.round(average);
  };

  const getOldestApplicant = (applicantsArray) => {
    const highestAge = applicantsArray
      .map((candidato) => candidato.idade)
      .reduce((acc, cur) => (cur > acc ? cur : acc));

    return applicantsArray.find((candidato) => candidato.idade === highestAge);
  };

  const getYoungestApplicant = (applicantsArray) => {
    const lowestAge = applicantsArray
      .map((candidato) => candidato.idade)
      .reduce((acc, cur) => (cur < acc ? cur : acc));

    return applicantsArray.find((candidato) => candidato.idade === lowestAge);
  };

  // porcentagem de candidatos de API .NET, iOS e QA
  const percentageOfApplicantsQA = calculateApplicantsPercentage(
    candidatosQA.length,
    data.length
  );
  const percentageOfApplicantsIOS = calculateApplicantsPercentage(
    candidatosIOS.length,
    data.length
  );
  const percentageOfApplicantsAPINET = calculateApplicantsPercentage(
    candidatosAPINET.length,
    data.length
  );

  // idade média dos candidatos de QA
  const averageAgeOfApplicantsQA = calculateArrayValuesAverage(
    candidatosQA.map((candidato) => candidato.idade)
  );

  // candidato mais velho entre os candidatos de iOS
  const oldestApplicantsIOS = getOldestApplicant(candidatosIOS);

  // candidato mais novo entre todos os candidatos API.NET
  const youngestApplicantsAPINET = getYoungestApplicant(candidatosAPINET);

  // soma da idade de todos os candidatos do API .NET
  const sumOfAgesAPINET = sumArrayValues(
    candidatosAPINET.map((candidato) => candidato.idade)
  );

  // array com estados distintos presentes na lista
  const uniqueStatesArray = [
    ...new Set(data.map((candidato) => candidato.estado)),
  ].sort();

  return [
    percentageOfApplicantsQA,
    percentageOfApplicantsIOS,
    percentageOfApplicantsAPINET,
    averageAgeOfApplicantsQA,
    sumOfAgesAPINET,
    uniqueStatesArray,
    oldestApplicantsIOS,
    youngestApplicantsAPINET,
  ];
};

module.exports = { calculateStatistics };
