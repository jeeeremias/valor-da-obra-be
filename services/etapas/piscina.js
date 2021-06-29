const VALOR = 1595;
  
  module.exports = (poolLength, poolWidth) => {
    area = poolLength * poolWidth;
    return {
      name: "Piscina",
      totalBudget: area * VALOR,
      steps: []
    }
  }