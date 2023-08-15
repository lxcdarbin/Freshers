const heading = document.querySelector('#heading-text')
const btn = document.querySelector('.btn')
const screen = document.querySelector('.videoplay')


const memes  = [
    {
        'text' : 'Do a dance',
        'link' : '<video id = "playing" src="utils/videos/0815(1).mp4" autoplay loop class="animation"</video>'
    },
    {
        'text' : 'Sing a song',
        'link': '<video id = "playing" src="utils/videos/sing.mp4" autoplay loop class="animation"</video>'
    }
]




btn.addEventListener('click' , ()=>{
    let indexes = Math.round(Math.random()*2)
    screen.innerHTML = memes[indexes]['link']
    new Typed('#heading-text', {
        strings: [`${memes[indexes]['text']}`],
        typeSpeed: 70,
        loop: false,
        showCursor: false
    
    });


    
    
    screen.id = 'videoplay'



})



