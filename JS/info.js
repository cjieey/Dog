const homep = (Title,para,btn) =>{
    let div = document.createElement('div')
    div.className = "personal"
    div.innerHTML = `<h1>${Title}</h1>
                    <p>${para}</p>
                    <button>${btn}</button>                
                    `

    return div
}

export{homep}