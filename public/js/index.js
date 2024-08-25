const container_h1 = document.querySelector('.header__container-title__content-title')
const containerSpanH1 = container_h1.childNodes.item(1).childNodes;
let span_h1 = []

containerSpanH1.forEach(i => { span_h1.push(i) })

const animationTitle = (n)=> {
    let randomNumber = Math.floor(Math.random() * 5)
    let randomSignal = Math.floor(Math.random() * 2)
    if (randomSignal == 1) {
        containerSpanH1.item(n).style.transform = `translateY(-${randomNumber}px)`;
    } else {
        containerSpanH1.item(n).style.transform = `translateY(${randomNumber}px) rotateY(360deg)`;
    }
}

setInterval(() => {
for (let i = 0; i < containerSpanH1.length; i++) {
    animationTitle(i);
}
}, 3000);
/* 

animationTitle(1);
animationTitle(2);
animationTitle(3);
animationTitle(4);
animationTitle(5);
animationTitle(6);
animationTitle(7);
animationTitle(8);
animationTitle(9);
animationTitle(10); */