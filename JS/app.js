import { homep } from "./info.js";
import { image } from "./img.js";
const textcontent = {
    Title: "MY DOG",
    para: " A golden retriever, often called a "golden," is a friendly and intelligent dog breed known for its beautiful golden coat and gentle temperament. In a shot explanation, we could showcase its friendly demeanor, intelligence, and loyalty through various scenes",
    button: "CONTACT US",
    dogimg: "dog.jpg"
}

const {Title,para,button,dogimg} = textcontent

let container = document.getElementById('container')
container.append(homep(Title,para,button))
container.append(image(dogimg))
