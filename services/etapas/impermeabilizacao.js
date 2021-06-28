const PORCENTAGEM = 0.0354;
module.exports = (valorTotal) => {
  return {
    name: "Impermeabilização",
    totalBudget: valorTotal * PORCENTAGEM,
    steps: [],
    description: "A principal fundação da impermeabilização é impedir a passagem de água ou fluídos sob a forma líquida ou vapor, bem como proteger as estruturas, e outros elementos construtivos da ação da água. A impermeabilização também tem a função de proteger o meio ambiente de possíveis vazamentos ou contaminações."
  }
}