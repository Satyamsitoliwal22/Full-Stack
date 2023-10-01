// document.addEventListener('click', function () {
//     console.log('i have clicked on document');
// });/

function eventFunction() {
     console.log('i have clicked on document');
}
document.addEventListener('click', eventFunction);
document.removeEventListener('click', eventFunction) //it remove effect of event listner

//by this we can pass event(anything name etc) in event listner 
const content = document.querySelector('#wrapper')

content.addEventListener('click', function (event) {
    console.log(event);
});

//default action - in this we can control the action of tag like anchor tag open link but we restrict it action of openning link by using prevent default
let links = document.querySelectorAll('a');
//i only want third anchor tag(third link)
let thirdlink = links[2];
thirdlink.addEventListener('click', function (event) {
    // event.preventDefault();
    console.log('maza aya,aca laga');
})

//how to use one event listner for many tag but define it for one main tag
let mydiv = document.createElement('div');

function paraStatus(event) { 
    console.log('para' + event.target.textcontent);
}
mydiv.addEventListener('click', paraStatus);

    for (let i = 0; i <= 100; i++){
        let newElement = document.createElement('p');
        newElement.textContent = 'this is a para' + i;
        mydiv.appendChild(newElement);
    }

document.body.appendChild(mydiv);