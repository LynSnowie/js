const bgMusic = [
    // "Miss You",
    // "Somebody That I Used To Know",
    // "Bodies",
    // "Radioactive",
    // // "Free Bird",
    // // "Ice Cream Song Lyrics",
    // "I Don't Care Anymore",
    // "Ripped Pants",
    // "Monster",
    // "Lonely Day", //System Of A Down - Lonely Day (Official HD Video)

    //Old shit above

    

    { title: "Down Under", artist: "SharaX", url: "about:blank", },
    // { title: "Livin' In the Sunlight, Lovin' In the Moon Light", artist: "Tiny Tim", url: "about:blank"},
    { title: "Danger Zone", artist: "Kenny Loggins", url: "free bird!", },
    // { title: "Dream On", artist: "Aerosmith", url: "free bird!", },
    // { title: "Free Bird", artist: "Lynyrd Shynyrd", url: "about:blank", },
    // { title: "Get Lucky", artist: "Daft Punk", url: "about:blank", },
    { title: "Goofy Goober Rock", artist: "Tom Rothrock and Jim Wis", url: "about:blank", },
    // { title: "Happy", artist: "Pharrel Williams", url: "about:blank", },
    // { title: "Intruder Alert (Metal)", artist: "Metal Fortress", url: "about:blank", },
    // { title: "Easy Lemon", artist: "Kevin Macleod", url: "about:blank", },
    // { title: "Lethal Company Ice Cream Song (Metal)", artist: "Lame Genie, Lethal Company by Zeekerss", url: "about:blank", },
    // { title: "Lethal Company Ice Cream Song (But with Lyrics)", artist: "Musical Unicorn, Lethal Company by Zeekerss", url: "about:blank", },
    { title: "Loonboon", artist: "Laura Shigihara", url: "about:blank", },
    { title: "Miss You", artist: "Oliver Tree", url: "about:blank", },
    // { title: "Nyan cat", artist: "Chris Torres", url: "about:blank", },
    // { title: "I Don't Care Anymore", artist: "Phil Collins", url: "about:blank", },
    // { title: "Pop It, Don't Drop It! (TF2 mix and original)", artist: "Lynyrd Shynyrd", url: "about:blank", },
    // { title: "Here I Come (Metal)", artist: "FalKKonE, DOORS by LSplash", url: "about:blank", },
    { title: "Radioactive", artist: "Imagine Dragons", url: "about:blank", },
    // { title: "Shake It Off", artist: "Taylor Swift", url: "about:blank", },
    // { title: "TF2 Soldier of Dance (Metal)", artist: "Metal Fortress", url: "about:blank", },
    // { title: "WAR!", artist: "DWL1993, Kriz (Orginal)", url: "about:blank", },
    { title: "What is Love", artist: "Haddaway", url: "about:blank", },
    // { title: "Spooky, Scary Skeletons", artist: "Andrew Gold", url: "about:blank", },
    { title: "Why Not", artist: "Ghostface Playa", url: "about:blank", },
    // { title: "Can You Feel My Heart", artist: "Instrumental", realartist: "Bring Me The Horizon", url: "about:blank", },
    // { title: "The Entertainer", artist: "Scott Joplin", url: "about:blank", },
    // { title: "Supernova", artist: "Laszlo", url: "about:blank", },
    // { title: "Lacrimosa", artist: "Mozart", url: "about:blank", },
    // { title: "Pixelland", artist: "Kevin Macleod", url: "about:blank", },
    // { title: "Ripped Pants", artist: "Jeff and Barry", url: "about:blank", },
    // { title: "AR?A_M4TH", artist: "bxnwxghxrn", url: "about:blank", },
    { title: "Party Rock Anthem", artist: "LMAFO, Lauren Bennett, GoonRock", url: "about:blank", },
    // { title: "Can You Feel My Heart", artist: "Bring Me The Horizon", url: "about:blank", },
    // { title: "Boom Boom Boom Boom!!", artist: "Vengaboys", url: "about:blank", },
    { title: "Nightcore - Monster", artist: "Skillet", url: "about:blank", },
    { title: "Thief", artist: "Ookay", url: "about:blank", },
    // { title: "Indigo Park Credits Song", artist: "RecD and OtterBoyVA", url: "about:blank", },
    // { title: "Welcome to Indigo Park", artist: "RecD and Jakeneutron", url: "about:blank", },
    { title: "Rambley Express", artist: "RecD and Jakeneutron", url: "about:blank", },
    // { title: "BARNSTORMING", artist: "RecD and Jakeneutron", url: "about:blank", },
    // { title: "Winds Of Fjords", artist: "Soft Knees", url: "about:blank", },
    // { title: "Western Spaghetti", artist: "Eric Gemsa", url: "about:blank", },
    // { title: "Cowboy Song", artist: "Sight of Wonders", url: "about:blank", },
    { title: "Graze the Roof, PvZ 2 Modern Day Mid-Wave B, Fanmade Remix", artist: "liledix4", url: "about:blank", },
    // { title: "Kazotsky Kick - Team Fortress 2 [NoteBlock Remix]", artist: "NoteBlock", url: "about:blank", },
    // { title: "All Eyes on Me", artist: "Conro (Monstercat)", url: "about:blank", },
    // { title: "8-Bit Weapon - M.U.L.E", artist: "Akita Neru", url: "about:blank", },  // break here
    // { title: "Level Up", artist: "Raccy", url: "about:blank", subfolder: "added", },
    { title: "Moon Theme Remix", artist: "Plasma3 Music", url: "about:blank", subfolder: "added", },
    { title: "our hearts collide", artist: "iamsleepless", url: "about:blank", subfolder: "added", },
    // { title: "Cadaver", artist: "Bonnie37 Electro", url: "about:blank", subfolder: "added", },
    // { title: "Relax Sound", artist: "Bonnie37 Electro", url: "about:blank", subfolder: "added", },
    // { title: "Sleep Sea", artist: "Bonnie37 Electro", url: "about:blank", subfolder: "added", },
    // { title: "Protogen Evolution", artist: "Bonnie37 Electro", url: "about:blank", subfolder: "added", },
    { title: "Bodies", artist: "Drowning Pool", url: "about:blank", subfolder: "added", },  // break here
    // { title: "turn back", artist: "wiv", url: "about:blank", subfolder: "added", },
    // { title: "sxrry", artist: "wiv", url: "about:blank", subfolder: "added", },
    // { title: "Memories", artist: "Gildarts", url: "about:blank", subfolder: "added", },
    // { title: "Ocean Eyes", artist: "Gildarts", url: "about:blank", subfolder: "added", },
    // { title: "INVERSE REALITY", artist: "ZØMB", url: "about:blank", subfolder: "added", },
    { title: "Lonely Day", artist: "System Of A Down", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    { title: "Another Mistake", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "Silly Plans", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    { title: "I Forgot That You Exist", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, }, // ¯\_(ツ)_/¯
    { title: "You Made Me Fall in Love 💖", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    // { title: "Bitter and Blunt ✨", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    // { title: "Paper Alibis", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    // { title: "Dandelion 🌼", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    // { title: "Circus Hop", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "It's Normal", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "You'll Be Gone", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "You're Just Like Pop Music", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    { title: "Top 10 Things to Do Before You Die", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "Fallacy", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "Trash Talkin'", artist: "YonKaGor and kennyoung", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "Silly Plans ~ Revisit", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "Memory Merge", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, },
    // { title: "Waterland", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: true, }, // break here
    { title: "Loner", artist: "kennyoung", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    // { title: "Nothing", artist: "kennyoung", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    { title: "See You!", artist: "kennyoung and YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    { title: "First Date", artist: "blink-182", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    { title: "Suicider", artist: "kennyoung", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    // { title: "I Don't Give A Shit", artist: "kennyoung", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    { title: "Kani Kani (Fish) Long", artist: "YonKaGor", url: "about:blank", subfolder: "added", hasinstrumental: false, },
    { title: "you are my sunshine", artist: "christina perri", url: "about:blank", subfolder: "added", hasinstrumental: false, }
    // { title: "", artist: "kennyoung", url: "about:blank", subfolder: "added", hasinstrumental: true, },
];

const chosenMusic = bgMusic[Math.floor(Math.random() * bgMusic.length)];
const audio = new Audio("https://github.com/sourcesounds/tf/raw/master/sound/music/mvm_start_mid_wave.wav");

bgMusic.forEach((file, index) => {
    if (file.title == chosenMusic.title) {
        console.log(chosenMusic.title);
        document.getElementById("playing-top").innerText = `Playing: ${chosenMusic.title} by ${chosenMusic.artist}`;
        document.getElementById("playing-bottom").innerText = `Playing: ${chosenMusic.title} by ${chosenMusic.artist}`;
        // console.log(`${index} ${file.title}`);
        // if (chosenMusic.subfolder == true) {
        //     audio.src = `/misc/snow/music/${chosenMusic.subfolder}/${chosenMusic.title}.mp3`
        // } else {
        //     audio.src = `/misc/snow/music/main/${index + 1}. ${chosenMusic.title}.mp3`
        // }
        

            switch (file.title) {
            case "Down Under":
                audio.volume = 0.5;
                audio.src = "/misc/snow/music/main/1. Down Under.mp3";
                break;
            case "Danger Zone":
                audio.volume = 0.5;
                audio.src = "/misc/snow/music/main/3. Danger Zone.mp3";
                break;
            case "Goofy Goober Rock":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/7. Goofy Goober Rock.mp3";
                break;
            case "Loonboon":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/13. Loonboon.mp3";
                break;
            case "Miss You":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/14. Miss You.mp3";
                break;
            case "Radioactive":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/19. Radioactive.mp3";
                break;
            case "What is Love":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/23. What is Love.mp3";
                break;
            case "Why Not":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/25. Why Not.mp3";
                break;
            case "Party Rock Anthem":
                audio.volume = 0.5;
                audio.src = "/misc/snow/music/main/33. Party Rock Anthem.mp3";
                break;
            case "Nightcore - Monster":
                audio.volume = 0.6;
                audio.src = "/misc/snow/music/main/36. Nightcore - Monster (Skillet).mp3";
                break;
            case "Thief":
                console.log("THIEF!");
                audio.volume = 0.2;
                audio.src = "/misc/snow/music/main/37. Ookay - Thief.mp3";
                break;
            case "Rambley Express":
                audio.volume = 0.3;
                audio.src = "/misc/snow/music/main/40. Rambley Express.mp3";
                break;
            case "Graze the Roof, PvZ 2 Modern Day Mid-Wave B, Fanmade Remix":
                audio.volume = 0.5;
                audio.src = "/misc/snow/music/main/45. Graze the Roof, PvZ 2 Modern Day Mid-Wave B, Fanmade Remix.mp3";
                break;

            case "Moon Theme Remix":
                audio.volume = 0.5;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "our hearts collide":
                audio.volume = 0.5;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "Bodies":
                audio.volume = 0.3;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "Lonely Day":
                audio.volume = 0.5;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "Another Mistake":
                audio.volume = 0.7;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "I Forgot That You Exist":
                audio.volume = 0.6;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "You Made Me Fall in Love 💖":
                audio.volume = 0.6;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "Top 10 Things to Do Before You Die":
                audio.volume = 0.5;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
                break;
            case "Loner":
                audio.volume = 0.5;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
            case "See You!":
                audio.volume = 0.4;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
            case "First Date":
                audio.volume = 0.15;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
            case "Suicider":
                audio.volume = 0.2;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
            case "Kani Kani (Fish) Long":
                audio.volume = 0.3;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
            case "you are my sunshine":
                audio.volume = 0.6;
                audio.src = `/misc/snow/music/${file.subfolder}/${file.title}.mp3`
        }
    }
});


audio.loop = true;

const audioplayer = document.getElementById("audio-player");
const audioplayerbottom = document.getElementById("audio-player-bottom");
const canvas = document.getElementById("visualizer");
const canvasbottom = document.getElementById("visualizerbottom");
const ctx = canvas.getContext("2d");
const ctxbottom = canvasbottom.getContext("2d");
const audioContext = new AudioContext();
const audioSource = audioContext.createMediaElementSource(audio);
const analyser = audioContext.createAnalyser();
                
audioSource.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 64;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

function draw() {
    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctxbottom.clearRect(0, 0, canvasbottom.width, canvasbottom.height);
    // console.log(dataArray);
    dataArray.forEach((value, index) => {
        const barHeight = value / 2;
        const x = index * 15;
        ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
        ctx.fillRect(x, canvas.height - barHeight, 10, barHeight);
        ctxbottom.fillStyle = "rgba(0, 255, 0, 0.6)";
        ctxbottom.fillRect(x, canvas.height - barHeight, 10, barHeight);
    });
}


function pageLoad() {
    if (localStorage.getItem("snowy bg") == undefined || localStorage.getItem("snowy bg") == null || localStorage.getItem("snowy bg") == "true") {
        console.log(localStorage.getItem("snowy bg"));
        localStorage.setItem("snowy bg", "false");
    }

    if (localStorage.getItem("snowy bg") == "false" || !audio.paused) {
        localStorage.setItem("snowy bg", "true");
        audio.play();
        draw();
    }
}

window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') { // Tab is active
        if (localStorage.getItem("snowy bg") == "false" || !audio.paused) {
            localStorage.setItem("snowy bg", "true");
            audio.play();
            draw();
        }
    } else { // Tab is not active
        audio.pause();
        localStorage.setItem("snowy bg", "false")
    }
});

audio.play();
draw();

window.onload = pageLoad;