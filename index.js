var noteValue = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4"]

var noteValueFreq = {
    "C4":"261.63", "C#4":"277.18", "D4":"293.66", "D#4":"311.13", "E4":"329.63", "F4":"349.23",
    "F#4":"369.99", "G4":"392.00", "G#4":"415.30", "A4":"440", "A#4":"466.16" 
}
var osc = null;
var osc2 = null;
const merge = new Tone.Merge().toDestination();
var note1 = null;
var note2 = null;



playNote = function () {
    try {
        osc.stop();
        osc2.stop();
    } catch (error) {}


    //Creating the two random notes
    note1 = getRandomInt(0, 10, null)
    note2 = getRandomInt(0, 10, note1)
    
    document.getElementById('firstNote').innerHTML = "First Note is: " + noteValue[note1]

    console.log(noteValue[note2]);

    //Playing the first note
    osc = new Tone.Oscillator(noteValueFreq[noteValue[note1]], "sine").connect(merge, 0, 0).start();
    setTimeout(function(){
        osc.stop()
    },1000)

    setTimeout(function(){
        osc = new Tone.Oscillator(noteValueFreq[noteValue[note1]], "sine").connect(merge, 0, 0).start();
        osc2 = new Tone.Oscillator(noteValueFreq[noteValue[note2]], "sine").connect(merge, 0, 1).start();
        setTimeout(function(){
            osc.stop();
            osc2.stop();
        }, 1000);
    },2000)
    document.getElementById('btn1').removeAttribute("disabled");
}

function playAgain() {
    try {
        osc.stop();
        osc2.stop();
    } catch (error) {}   
    //Playing the first note
    osc = new Tone.Oscillator(noteValueFreq[noteValue[note1]], "sine").connect(merge, 0, 0).start();
    setTimeout(function(){
        osc.stop()
    },1000)

    setTimeout(function(){
        osc = new Tone.Oscillator(noteValueFreq[noteValue[note1]], "sine").connect(merge, 0, 0).start();
        osc2 = new Tone.Oscillator(noteValueFreq[noteValue[note2]], "sine").connect(merge, 0, 1).start();
        setTimeout(function(){
            osc.stop();
            osc2.stop();
        }, 1000);
    },2000)
}

function getRandomInt(min, max, note) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var tmp = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    while (true) {
        if (tmp != note) {
            return tmp
            break
        } else {
            var tmp = Math.floor(Math.random() * (max - min) + min);
        }
    }
}

btnDisable = function() {
    document.getElementById('btn1').setAttribute('disabled', 'disabled');
    document.getElementById('btn2').setAttribute('disabled', 'disabled');
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
    setTimeout(function(){
        document.getElementById('btn1').removeAttribute('disabled');
        document.getElementById('btn2').removeAttribute('disabled');
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

    }, 3200)
}

userInput = function(note) {
    if (note === noteValue[note2]) {
        alert('Nice Work!')
    } else {
        alert('Not Quite')
    }
}