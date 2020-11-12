const PORCENTAGEM = 0.03;
module.exports = (valorTotal) => {
  return {
    name: "Impermeabilização",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}