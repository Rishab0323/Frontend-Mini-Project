const insert = document.getElementById('insert');

window.addEventListener('keydown',(e) => {
    insert.innerHTML = ` 
    <div class="key">
            ${event.key === ' ' ? 'space' : event.key} 
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.keyCode}
            <small>event.key</small>
        </div>
        <div class="key">
            ${event.code}
            <small>event.key</small>
        </div>`
})

