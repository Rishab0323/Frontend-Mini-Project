var btn = document.querySelector('button');
var p = document.querySelector('p');

btn.addEventListener('click',() => {
    p.textContent = 'text changed from lorem';
})

var img1 = document.querySelector('#one')
var img2 = document.querySelector('#two')

document.querySelector('button')
.addEventListener('click',() => {
    var src1 = img1.src;
    var src2 = img2.src;

    img1.src = src2;
    img2.src = src1
})
