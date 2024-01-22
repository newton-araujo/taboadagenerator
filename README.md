<h1>Tabuada Generator</h1>
Este é um simples script em JavaScript para gerar a tabuada de um número. Ele é projetado para ser incorporado em uma página da web e interagir com elementos HTML específicos.

<h2>Como usar</h2>

<ol>
<li><h4>HTML:</h4></li>
Certifique-se de ter os seguintes elementos HTML em sua página:

    <input type="text" id="number" placeholder="Digite um número">
    <button onclick="tabuada()">Gerar Tabuada</button>
    <div id="result"></div>

O campo de entrada (input) é onde você deve inserir o número para o qual deseja gerar a tabuada. O botão chama a função tabuada() e exibe o resultado na div com o id result.

<li><h4>JavaScript:</h4></li>
Inclua o código JavaScript em sua página ou vincule-o a partir de um arquivo externo:

        function tabuada() {
        let number = document.getElementById('number').value;
        let result = document.getElementById('result');

        number = Number(number);

        if (number === '' || Number(number) === 0) {
            result.innerHTML = '<p class="erro" style="color: red">Por favor, digite um número</p>';
        } else {
            let num = Number(number);
            let contador = 1;
            result.innerHTML = '';

            while (contador <= 10) {
                let item = document.createElement('p');
                item.textContent = `${contador} X ${num} = ${contador * num}`;

                result.appendChild(item);
                contador++;
            }
        }
    }

Este script define a função tabuada(), que recebe o número da entrada, verifica se é válido e, em seguida, gera a tabuada correspondente, exibindo-a na div com o id result.

</ol>

<h4>Click no link abaixo para testar:</h4>
