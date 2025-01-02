const progress = document.getElementBy('Progress')
const prev = document.getElementBy('Prev')
const Next = document.getElementBy('Next')
const circles = document.getElementBy('.circle') //. because it is more than one

let currentActive = 1

next.addEventListener('click', () =>{
    currentActive--

  if(currentActive < 1){
    currentActive = 1
  }  

  update()
})

function update(){
    circles.forEach((circle,idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 1) / (circles.length -1) * 100 + '%'
}