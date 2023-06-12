const infos = document.querySelectorAll('.moreInfo .trigger')

infos.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const moreInfo = trigger.parentElement;
        const isOpen = moreInfo.classList.contains('open')

        if (isOpen) {
            moreInfo.classList.remove('open')
        } else {
            moreInfo.classList.add('open')
        }
    })
})