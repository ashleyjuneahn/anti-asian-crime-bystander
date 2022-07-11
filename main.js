
//add progress bar
document.addEventListener('scroll', function(e) {
    let elem = document.documentElement;
    let body = document.body;
    let scrollTop = elem['scrollTop'] || body['scrollTop'];
    let scrollBottom = (elem['scrollHeight'] || body['scrollHeight']) - window.innerHeight;
    let scrollPercent = scrollTop / scrollBottom * 100 + '%';
    document.querySelector("#reading-progress").style.setProperty("width", scrollPercent); 
});


var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");

var scroller = scrollama();

function stepEnter(response) {
    var elem = response.element;
    steps.forEach(step => step.classList.remove('is-active'));
    elem.classList.add('is-active');
    sticky.querySelector("p").innerText = elem.dataset.step;
    sticky.querySelector("img").src = elem.dataset.image;

}

function init() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.25,
            debug: false
        })
        .onStepEnter(stepEnter);
        window.addEventListener("resize", scroller.resize);
}

init();