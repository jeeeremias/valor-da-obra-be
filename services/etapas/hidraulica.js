const PORCENTAGEM = 0.0527;
module.exports = (valorTotal) => {
  return {
    name: "Instalação Hidráulica",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: []
  }
}