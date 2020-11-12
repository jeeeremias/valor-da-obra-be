const PORCENTAGEM = 0.1489;
module.exports = (valorTotal) => {
  return {
    name: "Acabamento",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}