const PORCENTAGEM = 0.01;
module.exports = (valorTotal) => {
  return {
    name: "Serviços Complementares",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}