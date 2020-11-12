const PORCENTAGEM = 0.0576;
module.exports = (valorTotal) => {
  return {
    name: "Alvenaria",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}