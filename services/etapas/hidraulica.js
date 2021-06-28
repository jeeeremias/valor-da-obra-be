const PORCENTAGEM = 0.0567;
module.exports = (valorTotal) => {
  return {
    name: "Instalação Hidráulica",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "Instalação hidráulica é o sistema de abastecimento, distribuição e escoamento de água."
  }
}