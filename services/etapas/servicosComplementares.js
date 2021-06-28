const PORCENTAGEM = 0.0211;
module.exports = (valorTotal) => {
  return {
    name: "Serviços Complementares",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "São considerados como serviços complementares, aqueles que por sua vez ocorrem após a finalização da obra."
  }
}