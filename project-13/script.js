const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup', (e) =>{
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value  = ''
        })

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim()
!== '').map(tag => tag.trim())


    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl);
    })

}


function randomSelect(){
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()


        HighlightTag(randomTag)

        setTimeout(())
    }, 100);


    function pickRandomTag() {
        const tag = document.querySelectorAll('.tag')
        return tags[Math.floor(Math.random() * tags.length)]
    }

    function HighlightTag(tag) {
        tag.classList.add('highLight')
    }

    
    function unHighlightTag(tag) {
        tag.classList.remove('highLight')
    }
}