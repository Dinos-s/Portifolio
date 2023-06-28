const infos = document.querySelectorAll('.moreInfo')

infos.forEach((item, index) => {
    let btn = item.querySelector('button')
    btn.addEventListener('click', () => {
        item.classList.toggle('open')
        let desc = item.querySelector('.content')
        const isOpen = item.classList.contains('open')
        if (isOpen) {
            desc.style.height = `${desc.scrollHeight}px`
        } else {
            desc.style.height = "0px"
        }
        remoOpen(index)
    })
})

function remoOpen(index) {
    infos.forEach((item2, index2) => {
        if (index != index2) {
            item2.classList.remove('open')
            let desc = item2.querySelector('.content')
            desc.style.height = '0px'
        }
    })
}