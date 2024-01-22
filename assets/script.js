
function tabuada() {
    let number = document.getElementById('number').value;
    let result = document.getElementById('result')

    number = Number(number)

    if(number === '' || Number(number) === 0) {
        result.innerHTML = '<p class = "erro" style = "color: red">Por favor, digite um número</p>'
    } else {
        let num = Number(number)
        let contador = 1
        result.innerHTML = ''


        while (contador <= 10) {
            let item = document.createElement('p')
            item.textContent = `${contador} X ${num} = ${contador * num}`


            result.appendChild(item);
            contador ++
        }
    }


}