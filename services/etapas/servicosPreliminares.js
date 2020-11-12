const PORCENTAGEM = 0.008;
module.exports = (valorTotal) => {
  return {
    name: "Serviços Preliminares",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}