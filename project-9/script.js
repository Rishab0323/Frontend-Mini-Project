const sounds = ['leo','kgf2','leo1','salar','church'];

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn');
    
    btn.innerText = sound;

    btn.addEventListener('click', () =>{
        // stopSongs();
        
        document.getElementById(sound).play();
    })

    document.getElementById('buttons').
    appendChild(btn);
})

