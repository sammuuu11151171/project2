let btn = document.querySelector("button");
btn.addEventListener ("click", async() => {
    let link = await getDogImage();
    console.log(link)
    let img = document.querySelector("#pic");
    img.setAttribute("src", link);
});

let url = 'https://dog.ceo/api/breeds/image/random';

async function getDogImage() {
    try{
        let result = await axios.get(url);
        return result.data.message;
    } catch(err) {
        console.log("error is :- ", err);
        return "No fact was found..!";
    }
}


