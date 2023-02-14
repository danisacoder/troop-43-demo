const wrapperDiv = document.querySelector('.wrapper')

wrapperDiv.addEventListener('scroll', function(e) {
    
    console.log(wrapperDiv.pageYOffset)

    const target = document.querySelector('.far-grass')

    console.log(target.style)

    target.style.transform = 'translate3d(0px, 50px, 0px)'

})
 
 