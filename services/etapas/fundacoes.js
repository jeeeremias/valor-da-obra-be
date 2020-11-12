const PORCENTAGEM = 0.06;
module.exports = (valorTotal) => {
  return {
    name: "Fundações",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}