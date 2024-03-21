import { homep } from "./info.js";
import { image } from "./img.js";
const textcontent = {
    Title: "MY DOG",
    para: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, reprehenderit amet quidem autem perspiciatis distinctio ducimus quae aliquam minima, harum, illo molestias architecto cupiditate rem.",
    button: "CONTACT US",
    dogimg: "dog.jpg"
}

const {Title,para,button,dogimg} = textcontent

let container = document.getElementById('container')
container.append(homep(Title,para,button))
container.append(image(dogimg))