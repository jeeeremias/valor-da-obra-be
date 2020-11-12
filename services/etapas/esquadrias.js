const PORCENTAGEM = 0.0878;
module.exports = (valorTotal) => {
  return {
    name: "Esquadrias",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}