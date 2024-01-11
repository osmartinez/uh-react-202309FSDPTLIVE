const contadorElement = document.getElementById('contador')
const btnSumarElement = document.getElementById('btn-sumar')
const btnRestarElement = document.getElementById('btn-restar')

btnSumarElement.addEventListener('click',()=>{
    let contadorActual = Number(contadorElement.innerHTML)
    contadorActual = contadorActual + 1
    contadorElement.innerHTML = contadorActual
})

btnRestarElement.addEventListener('click',()=>{
    let contadorActual = Number(contadorElement.innerHTML)
    contadorActual--
    contadorElement.innerHTML = contadorActual
})