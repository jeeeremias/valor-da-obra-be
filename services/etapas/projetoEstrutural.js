const precoPorPadrao = {
  baixo: 8,
  medio: 8,
  alto: 10
};

module.exports = (standard, structuralProjectValue, area) => {
  return {
    name: "Projeto estrutural",
    totalBudget: structuralProjectValue ? structuralProjectValue : area * precoPorPadrao[standard],
    steps: []
  }
}