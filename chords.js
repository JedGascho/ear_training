// Plays the chord

function playChord (one, two, three) {
    const synth = new Tone.Synth().toDestination();
    const synth2 = new Tone.Synth().toDestination();
    const synth3 = new Tone.Synth().toDestination();
    
    synth.triggerAttackRelease(one, "4n");

    setTimeout(function (){
        synth2.triggerAttackRelease(two, "4n");
    }, 600)
    
    
    setTimeout(function (){
        synth2.triggerAttackRelease(three, "4n");
    }, 1200)

    setTimeout(function (){
        synth.triggerAttackRelease(one, "4n");
        synth2.triggerAttackRelease(two, "4n");
        synth3.triggerAttackRelease(three, "4n");
    }, 2300)
}