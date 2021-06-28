const PORCENTAGEM = 0.0921;
module.exports = (valorTotal) => {
  return {
    name: "Esquadrias",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "As principais funções das esquadrias para construção civil são: vedação para água e ar, redução do ruído, controle da passagem de luz, bloqueio da passagem de luz, controle de calor e visibilidade."
  }
}