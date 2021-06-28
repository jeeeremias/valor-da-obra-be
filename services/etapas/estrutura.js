const PORCENTAGEM = 0.167;
module.exports = (valorTotal) => {
  return {
    name: "Estrutura",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "A obra precisa de sustentação e estabilidade, e é a estrutura que garante isso, com um conjunto de elementos combinados, de maneira que todos os esforços produzidos pelo próprio peso da obra, seus ocupantes, ventos e outras sobrecargas, sejam suportados."
  }
}