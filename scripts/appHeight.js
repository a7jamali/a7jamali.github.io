const appHeight = () => {
    const doc = document.documentElement
    doc.style.setProperty('--app-height', `${window.innerHeight}px`)
}
window.addEventListener('resize', appHeight)
appHeight()


// const appWidth = () => {
//     const doc = document.documentElement
//     doc.style.setProperty('--app-width', `${window.innerWidth}px`)
// }
// window.addEventListener('resize', appWidth)
// appWidth()