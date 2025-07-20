let numero = parseInt(localStorage.getItem('contador')) || 0;
let intervalo;

function menos() {
    numero -= 1
    salvar()
    render()
}
function zero() {
    numero = 0
    salvar()
    render()
}
function mais() {
    numero += 1
    salvar()
    render()
}
function render() {
    document.querySelector('#result').innerHTML = numero
}
function salvar() {
    localStorage.setItem('contador', numero)
}
function iniciar(func) {
    func();
    intervalo = setInterval(func, 200)
}
function parar() {
    clearInterval(intervalo)
}
render()