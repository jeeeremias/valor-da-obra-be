const PORCENTAGEM = 0.03;
module.exports = (valorTotal) => {
  return {
    name: "Serviços Preliminares",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "São caracterizados como serviços preliminares, a preparação para o início da obra."
  }
}