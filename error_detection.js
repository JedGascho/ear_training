// note pics go in here
noteIMG = [""]

num = [-4, -3, -2, -1, 0, 1, 2, 3, 4]

var note1 = null;
var note2 = null;
var note2visual = null;

// Chromatic scale from C4 to C5
noteFreq = [261.63, 277.18, 293.66, 311.13, 329.63, 349.23, 369.99, 392.00, 415.30, 440.00, 466.16, 493.88, 523.25]

// noteName = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"]

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

function changeIMG() {
    document.getElementById("clef").src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
}



/* 0 - generate and play notes
1 = generate ONLY
*/

const startingNote = new Tone.Synth().toDestination();
const endingNote = new Tone.Synth().toDestination();

function playNotes (m) {
    if (m == 0) {
        var k = getRandomInt(0, 3)
        var tmp = num[k]
        // console.log(tmp);
        note1 = getRandomInt(0, noteFreq.length - 1);
        if (note1 + tmp >= 0) {
            note2 = note1 + tmp
        } else {
            note2 = note1
        }
        

        tmp = getRandomInt(0, 1)
        // console.log(tmp);
        while (true) {
            // console.log('stuck - note1, note2, note2visual, tmp', note1, note2, note2visual, tmp);
            var tmp2 = getRandomInt(0, 4);
            // console.log(tmp2);
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

    // console.log(note1, note2, note2visual);

    if (m == 0 || m == 1) {
        document.getElementById("play").setAttribute("disabled", "disabled")
        document.getElementById("playAgain").setAttribute("disabled", "disabled")

        setTimeout(function() {
            document.getElementById("play").removeAttribute("disabled")
            document.getElementById("playAgain").removeAttribute("disabled")
        }, 700)

        startingNote.triggerAttackRelease(noteFreq[note1], "8n");
        setTimeout(function() {
            endingNote.triggerAttackRelease(noteFreq[note2], "8n");
        }, 600)

        document.getElementById("note1").src = noteName[note1] 
        document.getElementById("note1").width=130 
        document.getElementById("note1").height=256
        document.getElementById("note2").src = noteName[note2visual]
        document.getElementById("note2").width=130 
        document.getElementById("note2").height=256
    }
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

// 0 is "same", 1 is "different"
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
