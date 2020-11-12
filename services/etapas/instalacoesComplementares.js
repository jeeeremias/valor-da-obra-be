const PORCENTAGEM = 0.02;
module.exports = (valorTotal) => {
  return {
    name: "Instalações Complementares",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}