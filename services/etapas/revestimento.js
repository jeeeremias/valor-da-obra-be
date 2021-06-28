const PORCENTAGEM = 0.0844;

module.exports = (floorArea) => {
  return {
    name: "Revestimento",
    totalBudget: floorArea * PORCENTAGEM,
    steps: [],
    description: "A função do revestimento é proteger as partes principais (estruturas e alvenarias) da edificação, normalmente cobrindo-as, em camadas sobrepostas."
  };
}