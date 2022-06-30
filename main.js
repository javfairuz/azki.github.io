const angka = document.querySelector('.count');
let we = document.querySelector('.text2');
const btn = document.querySelector('.btn-dark')
const next = document.querySelector('.lanjut') 
const play = document.querySelector('.play')
const gif = document.querySelector('.gif')
const uwu = document.querySelector('.uwu')
const thanks = document.querySelector(".thanks")
const gal = document.querySelector(".gallery")
btn.style.display ="none";
const update = () => {
    const target = +angka.getAttribute('data-target');
    let text = +angka.innerText;
    const increment = target / 200;
    // console.log(increment)
    if (text < target){
        angka.innerText = `${Math.ceil(text + increment )}`
        setTimeout(update,20)
    };
    if(text >= target){
        we.innerText = " we've been together";
        we.classList.add('animate__animated', 'animate__fadeInUp');
        btn.style.display ="inline-block";
        btn.classList.add('animate__animated', 'animate__backInLeft','animate__delay-1s');

    }

}
update();
// function
function change() {
    let p = document.querySelector('.text-center')
    p.style.display = 'block';
    angka.style.display = 'none';
    we.style.display = 'none';
    document.querySelector('.text').style.display = 'none';
    this.style.display = 'none';
    next.style.display = 'block';
    next.classList.add('animate__animated', 'animate__backInLeft','animate__delay-2s');
    gif.style.display = 'none';
}
function music(){
    let cont = document.querySelector('.lagu')
    const song = document.querySelector(".song")
    const letter = document.querySelector(".letter")
    const ilang  = document.querySelector(".ilang") 
    uwu.style.display = "none"
    // thanks.classList.add( 'animate__animated','animate__zoomInDown')
    song.classList.add( 'animate__animated','animate__zoomInRight', 'animate__delay-1s')
    cont.style.display = 'block'
    letter.style.display = 'none';
    // next.innerText = 'Gallery';
    ilang.style.display ='none'
    gal.style.display ='inline-block'
    next.classList.remove('animate__animated', 'animate__backInLeft','animate__delay-2s');
    gal.classList.add('animate__animated', 'animate__backInUp','animate__delay-5s')
    gal.style.width = '50%';
}

function changeText() {
    const love = document.querySelector(".love")
    thanks.classList.add( 'animate__animated','animate__fadeOutUp')
    thanks.style.display = 'none'
    love.style.display = 'inline-block'
    love.classList.add( 'animate__animated','animate__jackInTheBox','animate__delay-1s')

}

function anim() {
    play.classList.remove('animate__animated','animate__slideInDown', 'animate__delay-1s')
    play.classList.add( 'animate__animated','animate__bounceIn')
    function hello() {
        
        alert("denger sampe selesai ya")
        alert("coba pencetin teks teksnya")
    }
    setTimeout(hello,2000)
    document.getElementById("playy").play()
    document.getElementById("mati").pause()

}
// event
gal.addEventListener("click",function () {
    window.location.href = "galery.html";
})
thanks.addEventListener("click",changeText)
play.addEventListener("click",anim)
next.addEventListener("click",music)
btn.addEventListener("click",change)
// const bg = document.querySelector("body")
// setInterval(
    //     function changecollor() {
//     let red = 255
//     let green = 0
//     let blue = 255
//     if (green <192 ){
//         green++
//         if (blue >=0) {
//             blue--
//         }
//         console.log(green)
//     }
//     for (green; green >=196; green--) {
//         for(let i = 0; i < blue.length ; i++) {
//             bg.style.backgroundColor = `rgb(${red},${green},${blue}`
//             console.log(Math.floor(blue[i]))
//         }
//     }
// }
// changecollor()

// setInterval (function () {
//     let col = collor[Math.floor(Math.random() * collor.length)]

//     bg.style.background= col
    
// },50)