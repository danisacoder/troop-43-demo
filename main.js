const wrapperDiv = document.querySelector('.wrapper')

if (wrapperDiv) {
    
    wrapperDiv.addEventListener('scroll', function(e) {
    
    // Background paper scroll speed controls

        const mountains1 = document.querySelector('.mountain-layer-1')
        const mountains2 = document.querySelector('.mountain-layer-2')
        const mountains3 = document.querySelector('.mountain-layer-3')
        const mountains4 = document.querySelector('.mountain-layer-4')
        const mountains5 = document.querySelector('.mountain-layer-5')
        const mountains6 = document.querySelector('.mountain-layer-6')

        

        var scrolledAmnt = wrapperDiv.scrollTop

        let mountains1scroll = scrolledAmnt * .8

        let mountains2scroll = scrolledAmnt * .7

        let mountains3scroll = scrolledAmnt * .6

        let mountains4scroll = scrolledAmnt * .5

        let mountains5scroll = scrolledAmnt * .4

        let mountains6scroll = scrolledAmnt * .3


        mountains1.style.transform = `translate3d(0px, ${mountains1scroll}px, 0px)`


        mountains2.style.transform = `translate3d(0px, ${mountains2scroll}px, 0px)`

        mountains3.style.transform = `translate3d(0px, ${mountains3scroll}px, 0px)`

        mountains4.style.transform = `translate3d(0px, ${mountains4scroll}px, 0px)`

        mountains5.style.transform = `translate3d(0px, ${mountains5scroll}px, 0px)`

        mountains6.style.transform = `translate3d(0px, ${mountains6scroll}px, 0px)`

    })

}

// changing the style of the current link in menu so you know where you are

const linkListHtml = document.querySelector('.linklist').innerHTML

console.log(linkListHtml)

const menuLinkListArray = document.querySelectorAll('.linklist a')

console.log(menuLinkListArray)

const homepageLink = document.querySelector('#index')

console.log(homepageLink)

var currentFileName = location.href.split("/").slice(-1).join('').split('.').shift()

console.log(currentFileName)

const currentPage = window.location.pathname;

// console.log(currentPage)

for (let entry of menuLinkListArray) { 

    if (entry.id === currentFileName)  {
        entry.style.color = 'gray'
    } else {
        homepageLink.style.color = 'gray'
    }
}

// making the link to the current page invalid, so you don't reload and waste time/data

document.addEventListener('click', function(e) {

    if (e.target.id === currentFileName) {
        e.target.href = "#"
    }
})

// Swipe responses to touch input

const p1 = document.querySelector('.page-1')
const p2 = document.querySelector('.page-2')

const startingX = 0

function p1HandleTouchStart(e) {
    startingX = e.touches[0].clientX;
} 

function p1HandleTouchMove(e) {
    const touch = e.touches[0];
    // "change" is the difference between the starting point and the touching point at the moment we are swiping, which lets us set the style of swipe... I think
    const change = startingX - touch.clientX;

    p1.style.top = `-${change}px`

}

