const PORCENTAGEM = 0.0313;
module.exports = (valorTotal) => {
  return {
    name: "Instalações Complementares",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "As instalações complementares, como o próprio nome fala é uma instalação que tem como objetivo complementar a instalação elétrica e hidráulica."
  }
}