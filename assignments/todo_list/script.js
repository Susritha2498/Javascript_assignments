let addBtn = document.querySelector('button')
addBtn.addEventListener('click',add)
let parent1 = document.querySelector('div.todos')
let idx = 0
let content=''
function add(e){
    content = document.querySelector('input').value
    let paragraph = document.createElement('p')
    paragraph.setAttribute('key',String(idx))
    paragraph.innerHTML=content
    parent1.appendChild(paragraph)
    //paragraph.addEventListener('click',func2(idx))
    idx+=1

    document.querySelector((`p[key="${idx-1}"]`)).addEventListener('click',function(e){
        parent1.removeChild(this)
    })

}

// function func2(idx){
//     parent1.removeChild(document.querySelector(`p[key=${idx}]`))
// }
