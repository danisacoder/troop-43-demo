const wrapperDiv = document.querySelector('.wrapper')

wrapperDiv.addEventListener('scroll', function(e) {
    
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
 

 