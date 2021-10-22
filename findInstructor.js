const findInstructor = (data) => {
  const relevantPrimes = [19, 23, 29, 31];
  const [instrutorIOS] = data.filter(
    (candidato) =>
      candidato.idade > 20 &&
      candidato.idade < 31 &&
      candidato.idade % 2 === 1 &&
      relevantPrimes.includes(candidato.idade) &&
      candidato.estado === 'SC' &&
      candidato.vaga !== 'iOS' &&
      /^V/.test(candidato.nome.split(' ')[candidato.nome.split(' ').length - 1])
  );

  console.log(`O nome do instrutor de iOS é: ${instrutorIOS.nome}.`);
};

module.exports = { findInstructor };
