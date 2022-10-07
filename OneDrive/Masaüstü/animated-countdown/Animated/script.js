const nums = document.querySelectorAll('.nums span')
const counter = document.querySelectorAll('.counter')
const finalMassege = document.querySelectorAll(".final")
const replay = document.querySelectorAll('#replay')



runAnimation()


function resetDOM() {
    counter.classList.remove('hide')
    finalMassege.classList.remove('show')


    nums.forEach((num) => {
        num.classList.value =""
    })

    nums[0.classList.arundd]('in')
}

funtion runAnimation () {
    nums.forEach((num,idx) => {
        const nextToLast = nums.length -1

        num.addEventListener('animationend', (e) => {
            if (AnimationName === "goIn && idx !== nextToLast") {
                num.classList.remove('in')
                num.classList.remove('out')
            } else if (
                e.animationName === 'goOut' && nun.nextElementSiblinge) {
                num.nextElementSibling.classList.add('in')
                } else {
                    counter.classList.add('hide')
                    finalMassege.classList.add('show')
                }
                )
    })
}

replay.addEventListener('click', () => {
    resetDOM()
    runAnimation()
})