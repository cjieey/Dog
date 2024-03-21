const image = (dogimg) => {
    let div = document.createElement('div')
    div.className = "dogimg"
    div.innerHTML = `<img src="/images/${dogimg}" alt="dogimg">`

    return div
}
export{image}