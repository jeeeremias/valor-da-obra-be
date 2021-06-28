const PORCENTAGEM = 0.0406;
module.exports = (valorTotal) => {
  return {
    name: "Vidros",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "Dentre várias funções o vidro tem como principal funcionalidade proporcionar maior entrada de luz aos ambientes, garantindo um espaço aconchegante e arejado."
  }
}