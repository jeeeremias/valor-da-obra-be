const items = [
  {name: "Piso Cerâmico 45x45cm Detalhe: Habitat Cimento AC Marca: Eliane", unit: "m²", factor: 1.2, price: 28.9},
  {name: "Assentamento de Piso Cerâmico", unit: "m²", factor: 1, price: 24.6},
  {name: "Assentamento de Rodapé Cerâmico", unit: "m²", factor: 1, price: 11.2},
  {name: "Argamassa Cimento Colante ACI 20kg Detalhe: Ligamax Gold Basic Marca: Eliane", unit: "kg", factor: 5.6, price: 2.5},
  {name: "Espaçador Plástico 3mm", unit: "un", factor: 7, price: 0.14},
  {name: "Rejunte Flexível Cinza Claro Detalhe: Ligamax Gold Super Aditivado Marca: Eliane", unit: "kg", factor: 0.22, price: 4},
]

module.exports = (areaUtil) => {
  return items.map(item => {
    let qt = item.factor * areaUtil;
    return {name: item.name, quantity: qt, totalPrice: qt * item.price, unitPrice: item.price}
  })
}