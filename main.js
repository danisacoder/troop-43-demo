const wrapperDiv = document.querySelector('.wrapper')

wrapperDiv.addEventListener('scroll', function(e) {
    
// Background paper scroll speed controls

    const mountains = document.querySelector('.mountains')

    const topGrass = document.querySelector('.top-grass')

    const midGrass = document.querySelector('.mid-grass')

    const bottomGrass = document.querySelector('.bottom-grass')

    var scrolledAmnt = wrapperDiv.scrollTop

    let mountainScroll = scrolledAmnt * .8

    let topGrassScroll = scrolledAmnt * .7

    let midGrassScroll = scrolledAmnt * .6

    let bottomGrassScroll = scrolledAmnt * .5


    mountains.style.transform = `translate3d(0px, ${mountainScroll}px, 0px)`


    topGrass.style.transform = `translate3d(0px, ${topGrassScroll}px, 0px)`

    midGrass.style.transform = `translate3d(0px, ${midGrassScroll}px, 0px)`

    bottomGrass.style.transform = `translate3d(0px, ${bottomGrassScroll}px, 0px)`

})

// changing the style of the current link in menu so you know where you are

const linkListHtml = document.querySelector('.linklist').innerHTML

console.log(linkListHtml)

const menuLinkListArray = document.querySelectorAll('.linklist a')

console.log(menuLinkListArray)

var currentFileName = location.href.split("/").slice(-1).join('').split('.').shift()

console.log(currentFileName)

const current = window.location.pathname;

if (current == '/index.html') {
  console.log('Is the homepage.')
} else {
  console.log('Not on the homepage.')
}

for (let entry of menuLinkListArray) {
    if (entry.id === currentFileName)  {
        entry.style.color = 'gray'
    } 
}

// making the link to the current page invalid, so you don't reload and waste time/data

document.addEventListener('click', function(e) {

    if (e.target.id === currentFileName) {
        e.target.href = "#"
    }
})