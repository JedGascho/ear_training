// Plays the chord
FS = ['equalTempF#M', 
'meanTempF#M', 
'werckmeisterTempF#M',
'pythagoreanTempF#M',
'justMajorTempF#M',
'equalTempF#m',
'meanTempF#m',
'werckmeisterTempF#m',
'pythagoreanTempF#m',
'justMajorTempF#m'
]

G = ['equalTempGM', 
'meanTempGM', 
'werckmeisterTempGM',
'pythagoreanTempGM',
'justMajorTempGM',
'equalTempGm',
'meanTempGm',
'werckmeisterTempGm',
'pythagoreanTempGm',
'justMajorTempGm'
]

GS = ['equalTempG#M', 
'meanTempG#M', 
'werckmeisterTempG#M',
'pythagoreanTempG#M',
'justMajorTempG#M',
'equalTempG#m',
'meanTempG#m',
'werckmeisterTempG#m',
'pythagoreanTempG#m',
'justMajorTempG#m'
]

D = ['equalTempDM', 
'meanTempDM', 
'werckmeisterTempDM',
'pythagoreanTempDM',
'justMajorTempDM',
'equalTempDm',
'meanTempDm',
'werckmeisterTempDm',
'pythagoreanTempDm',
'justMajorTempDm'
]


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

btnDisable = function(wait, x) {
    for (x in FS) {
        document.getElementById(FS[x]).setAttribute('disabled', 'disabled');
    }
    for (x in G) {
        document.getElementById(G[x]).setAttribute('disabled', 'disabled');
    }
    for (x in GS) {
        document.getElementById(GS[x]).setAttribute('disabled', 'disabled');
    }
    for (x in D) {
        document.getElementById(D[x]).setAttribute('disabled', 'disabled');
    }
    setTimeout(function(){
        for (x in FS) {
            document.getElementById(FS[x]).removeAttribute('disabled');
        }
        for (x in G) {
            document.getElementById(G[x]).removeAttribute('disabled');
        }
        for (x in GS) {
            document.getElementById(GS[x]).removeAttribute('disabled');
        }
        for (x in D) {
            document.getElementById(D[x]).removeAttribute('disabled');
        }
    }, wait)


}
