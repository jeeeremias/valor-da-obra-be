const PORCENTAGEM = 0.0478;
module.exports = (valorTotal) => {
  return {
    name: "Pintura",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "A pintura de uma casa não deve ser feita apenas pelo seu aspecto estético, mas também para sua conservação, principalmente as paredes externas, que ficam expostas ao sol e a chuva."
  }
}