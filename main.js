// add same menu every time with JS (for consistency)

let navDiv = document.querySelector('nav')

navDiv.innerHTML = `
    <label class="hamburger-menu">
            <input type="checkbox"/>
    </label>
    <aside class="sidebar">
        <nav class="linklist">
            <div><a href="album.html" class="four-hundred-text fancy-text" id="album">The End & In Between</a></div>
            <div><a href="dylan.html" class="four-hundred-text fancy-text" id="dylan">Dylan Fellows</a></div>
            <div><a href="updates.html" class="left-padding" id="press">Press Kit</a></div>
            <div><a href="news.html" class="left-padding" id="news">Updates</a></div>
            <div><a href="index.html" class="four-hundred-text fancy-text" id="index">Troop 43</a></div>
            <div><a href="#survival" class="left-padding" id="videos">Survival Tips</a></div>
            <div><a href="international.html" class="four-hundred-text fancy-text" id="international">Mr. International</a></div>
        </nav>
    </aside>
`

// creating the parallax backcground elements

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
        // const troopContent =  document.querySelector('.generic-wrapper')

        var scrolledAmnt = wrapperDiv.scrollTop

        let mountains1scroll = scrolledAmnt * .35

        let mountains2scroll = scrolledAmnt * .3

        let mountains3scroll = scrolledAmnt * .25

        let mountains4scroll = scrolledAmnt * .2

        let mountains5scroll = scrolledAmnt * .15

        let mountains6scroll = scrolledAmnt * .1

        // let troopContentScroll = scrolledAmnt * 2


        mountains1.style.transform = `translate3d(0px, ${mountains1scroll}px, 0px)`


        mountains2.style.transform = `translate3d(0px, ${mountains2scroll}px, 0px)`

        mountains3.style.transform = `translate3d(0px, ${mountains3scroll}px, 0px)`

        mountains4.style.transform = `translate3d(0px, ${mountains4scroll}px, 0px)`

        mountains5.style.transform = `translate3d(0px, ${mountains5scroll}px, 0px)`

        mountains6.style.transform = `translate3d(0px, ${mountains6scroll}px, 0px)`

        // troopContent.style.transform =  `translate3d(0px, ${troopContentScroll}px, 0px)`

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

    if (entry.id === currentFileName) {
        entry.style.color = 'gray'
    } else {
        
    }
}

// making the link to the current page invalid, so you don't reload and waste time/data

console.log(currentFileName)

// document.addEventListener('click', function(e) {

    // if (e.target.id === )

//     if (e.target.id === currentFileName) {
//         e.target.href = "#"
//     }
// })

// Making menu close if you click/tap somewhere not in the menu

let hamburgerCheckbox = document.querySelector('input[name=checkbox]')

// hamburgerCheckbox.addEventListener('change', function() {
//     console.log('wow!')
// })

