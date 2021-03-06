dropdown = ['dropdown0',
'dropdown1',
'dropdown2',
'dropdown3',
'dropdown4',
'dropdown5',
'dropdown6',
'dropdown7',
'dropdown8',
'dropdown9',
'dropdown10']

//Make all buttons in the ear training sectino disabled until notes are generated
for (x in dropdown) {
    document.getElementById(dropdown[x]).setAttribute('disabled', 'disabled');
}
document.getElementById('btn2').setAttribute('disabled', 'disabled');

// Used for synth input
var noteValue = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4"]

var noteValueFreq = {
    "C4":"261.63", "C#4":"277.18", "D4":"293.66", "D#4":"311.13", "E4":"329.63", "F4":"349.23",
    "F#4":"369.99", "G4":"392.00", "G#4":"415.30", "A4":"440", "A#4":"466.16" 
}

// Global scope
var osc = null;
var osc2 = null;
const merge = new Tone.Merge().toDestination();
var note1 = null;
var note2 = null;
var j = null;


// Plays and creates two notes
playNote = function () {
    j = 0
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
    const synth = new Tone.Synth().toDestination();
    const synth2 = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(noteValueFreq[noteValue[note1]], "4n");
    setTimeout(function(){
        synth.triggerAttackRelease(noteValueFreq[noteValue[note1]], "4n");
        synth2.triggerAttackRelease(noteValueFreq[noteValue[note2]], "4n");
    },1250)
    

    document.getElementById('btn1').removeAttribute("disabled");
}

// Plays the sounds again
function playAgain() {
    const synth = new Tone.Synth().toDestination();
    const synth2 = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(noteValueFreq[noteValue[note1]], "4n");
    setTimeout(function(){
        synth.triggerAttackRelease(noteValueFreq[noteValue[note1]], "4n");
        synth2.triggerAttackRelease(noteValueFreq[noteValue[note2]], "4n");
    },1250)
}

// Random int gen, used for getting the randomized note
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

// Disables buttons when sounds are playing
btnDisable = function(wait, x) {
    for (x in dropdown) {
        document.getElementById(dropdown[x]).setAttribute('disabled', 'disabled');
    }
    document.getElementById('btn1').setAttribute('disabled', 'disabled')
    document.getElementById('btn2').setAttribute('disabled', 'disabled')
    setTimeout(function(){
        document.getElementById('btn1').removeAttribute('disabled');
        if (x == 1) {
            for (x in dropdown) {
                document.getElementById(dropdown[x]).setAttribute('disabled', 'disabled');
            }
            document.getElementById('btn2').removeAttribute('disabled');
        } else if (j == 0) {
            document.getElementById('btn1').removeAttribute('disabled');
            document.getElementById('btn2').removeAttribute('disabled');
            for (x in dropdown) {
                document.getElementById(dropdown[x]).removeAttribute('disabled');
            }
        }
    }, wait)
}

// Checks if users input is the correct answer
userInput = function(note) {
    if (note === noteValue[note2]) {
        if (confirm('Nice Work!, play again?')) {
            playNote();
            btnDisable(2300, 1);
        } else {
            for (x in dropdown) {
                document.getElementById(dropdown[x]).setAttribute('disabled', 'disabled');
            }
            document.getElementById('btn2').setAttribute('disabled', 'disabled');
            document.getElementById('firstNote').innerHTML = "????????????"
            j = null;

        }
        
    } else {
        alert('Not Quite')
    }
}

// Enables buttons
function enable() {
    for (x in dropdown) {
        document.getElementById(dropdown[x]).removeAttribute('disabled');
    }
    document.getElementById('btn2').removeAttribute('disabled');
}

