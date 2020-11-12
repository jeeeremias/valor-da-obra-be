const PORCENTAGEM = 0.0478;
module.exports = (valorTotal) => {
  return {
    name: "Pintura",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}