const PORCENTAGEM = 0.22;
module.exports = (valorTotal) => {
  return {
    name: "Estrutura",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}