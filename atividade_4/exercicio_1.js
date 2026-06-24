    //Exercício 1 - Cardápio 
    let codigo_produto = 2
    let quantidade_hamburguer = 3

    switch (codigo_produto) {
    case 1:
        console.log("pedido tradicional");
        break;
    case 2:
        console.log("pedido tradicional")
        break;
    case 3:
        console.log ("pedido saudavel")
        break;
    case 4:
        console.log("refrigerante")
        break;
    default:
        console.log("produto não encontrado")
}

let pedido = (codigo_produto == 4) ? "Bebida escolhida" : "Alimento escolhido";
    console.log (pedido)