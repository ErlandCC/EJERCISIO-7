function calcularIMC() {

    var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('peso').value);

    var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;

    if (imc < 18.5) {
        clasificacion = 'BAJO PESO';
    } else if (imc < 25) {
        clasificacion = 'NORMAL';
    } else {
        clasificacion = 'SOBREPESO';
        if (imc >= 30)
            clasificacion = 'OBESO';
    } { document.getElementById('result').innerHTML = ('Tu IMC es ' + imc + ' y tu clasificacion es ' + clasificacion) }
}