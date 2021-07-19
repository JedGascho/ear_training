//Make all buttons in the ear training sectino disabled until notes are generated

document.getElementById('dropdown0').setAttribute('disabled', 'disabled');
document.getElementById('dropdown1').setAttribute('disabled', 'disabled');
document.getElementById('dropdown2').setAttribute('disabled', 'disabled');
document.getElementById('dropdown3').setAttribute('disabled', 'disabled');
document.getElementById('dropdown4').setAttribute('disabled', 'disabled');
document.getElementById('dropdown5').setAttribute('disabled', 'disabled');
document.getElementById('dropdown6').setAttribute('disabled', 'disabled');
document.getElementById('dropdown7').setAttribute('disabled', 'disabled');
document.getElementById('dropdown8').setAttribute('disabled', 'disabled');
document.getElementById('dropdown9').setAttribute('disabled', 'disabled');
document.getElementById('dropdown10').setAttribute('disabled', 'disabled');
document.getElementById('btn2').setAttribute('disabled', 'disabled');

function enable() {
    document.getElementById('dropdown0').removeAttribute('disabled');
    document.getElementById('dropdown1').removeAttribute('disabled');
    document.getElementById('dropdown2').removeAttribute('disabled');
    document.getElementById('dropdown3').removeAttribute('disabled');
    document.getElementById('dropdown4').removeAttribute('disabled');
    document.getElementById('dropdown5').removeAttribute('disabled');
    document.getElementById('dropdown6').removeAttribute('disabled');
    document.getElementById('dropdown7').removeAttribute('disabled');
    document.getElementById('dropdown8').removeAttribute('disabled');
    document.getElementById('dropdown9').removeAttribute('disabled');
    document.getElementById('dropdown10').removeAttribute('disabled');
    document.getElementById('btn2').removeAttribute('disabled');
}