const PORCENTAGEM = 0.0647;
module.exports = (valorTotal) => {
  return {
    name: "Fundações",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "A fundação é a estrutura que permite a distribuição de carregamentos (como o peso dos materiais) para o solo na construção de casas, prédios, viadutos ou qualquer grande edificação."
  }
}