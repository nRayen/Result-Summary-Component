
let notes = document.querySelectorAll('.card p span')
let gen = document.querySelector('.note')
let mention = document.querySelector('.mention')
let percentage = document.querySelector('.resultsection .classement span')

fetch('data.json')
.then(r => {
    return (r.json())
})
.then(data => {
    console.log(data)

    n = 0;
    for (let i in data){
        notes[i].innerHTML = data[i].score
        n += data[i].score;
    }

    gen.innerHTML = Math.floor(n/4);
})

