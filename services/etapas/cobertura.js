const PORCENTAGEM = 0.0323;
module.exports = (valorTotal) => {
  return {
    name: "Cobertura",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}