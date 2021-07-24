// Disabled the Hear Again button before notes are assigned
document.getElementById("playAgain").setAttribute("disabled", "disabled")

// Used for random nums
num = [-4, -3, -2, -1, 0, 1, 2, 3, 4]


//Global scope
var note1 = null;
var note2 = null;
var note2visual = null;
const startingNote = new Tone.Synth().toDestination();
const endingNote = new Tone.Synth().toDestination();

// Chromatic scale from C4 to C5
noteFreq = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25]

// Creating an array of the images
noteName = ["https://github.com/JedGascho/ear_training/blob/main/note_images/C4.png?raw=true", 
"https://github.com/JedGascho/ear_training/blob/main/note_images/C%234.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/D4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/D%234.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/E4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/F4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/F%234.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/G4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/G%234.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/A4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/Bb4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/B4.png?raw=true",
"https://github.com/JedGascho/ear_training/blob/main/note_images/C5.png?raw=true"]

/* 0 - generate and play notes
1 = generate ONLY
*/
function playNotes (m) {
    /* note1 - played and displayed correctly
    note2 - only played via audio
    note2visual - the shown note for note2, within a certain threshhold of note2 */


    if (m == 0) {
        // Generates negative numbers
        var k = getRandomInt(0, 3)
        var tmp = num[k]

        // Creates index for the SHOWN NOTES
        note1 = getRandomInt(0, noteFreq.length - 1);
        if (note1 + tmp >= 0) {
            note2 = note1 + tmp
        } else {
            note2 = note1
        }
        
        // Used for deciding whether second number goes UP or DOWN
        tmp = getRandomInt(0, 1)
        while (true) {
            // Used to create x amount of halfsteps between the seconnd played note and the second shown note (note2 and note2visual)
            var tmp2 = getRandomInt(0, 4);

            // Sees if the created notes meet criteria, if not it recurses the function to create new index numbers
            if (tmp == 0) {
                if (note1 - tmp2 < noteFreq.length && note1 - tmp2 >= 0 ) {
                    note2visual = note1 - tmp2
                    break
                } else {
                    playNotes(0)
                }
            } 
            if (tmp == 1) {
                if (note1 + tmp2 < noteFreq.length && note1 - tmp2 >= 0 ) {
                    note2visual = note1 + tmp2
                    break
                } else {
                    playNotes(0)
                }  
            }
        }
    }

    if (m == 0 || m == 1) {
        // Shows images
        document.getElementById("note1").src = noteName[note1] 
        document.getElementById("note1").width=130 
        document.getElementById("note1").height=256
        document.getElementById("note2").src = noteName[note2visual]
        document.getElementById("note2").width=130 
        document.getElementById("note2").height=256

        // Disables buttons while the notes are playing
        document.getElementById("play").setAttribute("disabled", "disabled")
        document.getElementById("playAgain").setAttribute("disabled", "disabled")
        setTimeout(function() {
            document.getElementById("play").removeAttribute("disabled")
            document.getElementById("playAgain").removeAttribute("disabled")
        }, 700)

        // Plays notes
        startingNote.triggerAttackRelease(noteFreq[note1], "8n");
        setTimeout(function() {
            endingNote.triggerAttackRelease(noteFreq[note2], "8n");
        }, 600)
    }
}

// Used to create random numbers 
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

// 0 is Match, 1 Doesn't Match
// Checks if the users inputted answer if correct
function checkAnswer(user_input) {
    if (user_input == 0) {
        if (note2 === note2visual) {
            if (confirm("Nice Job! \nPlay again?")) {
                playNotes(0)
            }
        } else {
            alert('Not quite, try again')
        }
    } else if (user_input == 1) {
        if (note2 != note2visual) {
            if (confirm("Nice Job! \nPlay again?")) {
                playNotes(0)
            }
        } else {
            alert('Not quite, try again')
        }
    }
}


