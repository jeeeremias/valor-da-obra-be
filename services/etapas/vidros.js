const PORCENTAGEM = 0.0406;
module.exports = (valorTotal) => {
  return {
    name: "Vidros",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}