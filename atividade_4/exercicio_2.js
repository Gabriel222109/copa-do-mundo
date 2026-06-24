//Exercício 2- Categorize os números:
    // Exercício 2 - Categorize os números (0 a 100)
    for (let numero = 0; numero <= 100; numero++) {
    let mensagem = "O número " + numero;

    if (numero >= 0 && numero <= 100) {
        mensagem += " está dentro do intervalo de 0 a 100 e é ";

        if (numero % 2 === 0) {
            mensagem += "par.";
        } else {
            mensagem += "ímpar.";
        }
    } else {
        mensagem += " está fora do intervalo de 0 a 100.";
    }

    console.log(mensagem);
}
