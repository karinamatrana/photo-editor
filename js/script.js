const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const reader = new FileReader();

// ctx.fillText("Canvas text!", 100, 50);
// // ctx.strokeRect(0, 0, canvas.width, canvas.height);

// ctx.fillStyle = '#eeeddd';
// ctx.fillRect(0, 0, 50, 50);
// ctx.fillStyle = "red";
// ctx.beginPath();
// ctx.moveTo(canvas.width/2, canvas.height/2);
// ctx.lineTo(250, 50);
// ctx.lineTo(250, 100);
// ctx.closePath();
// ctx.fill();

const img = new Image();

const uploadImage = e => {
    reader.onload = () => {
        img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        }
    img.src = reader.result;    

    }
    reader.readAsDataURL(e.target.files[0]);
    // console.log(reader);
    // console.log(e);
}

const imageLoader = document.getElementById("uploader");
imageLoader.addEventListener('change', uploadImage);

const greyScale = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        const grey = (data[i] + data[i+2] + data[i+3])/3;
        // data[i] *= .2126;
        // data[i+1] *= .7152;
        // data[i+2] *= .0722;
        data[i] = grey;
        data[i+1] = grey;
        data[i+2] = grey;
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const sepia = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        const grey = (data[i] + data[i+2] + data[i+3])/3;
        data[i] = grey + 95;
        data[i+1] = grey + 58;
        data[i+2] = grey;
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const invert = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        data[i] = 255 - data[i];
        data[i+1] = 255 - data[i+1];
        data[i+2] = 255 - data[i+2];
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const greenToBlue = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        data[i] = data[i];
        data[i+1] = data[i+2];
        data[i+2] = data[i+1];
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const bgr = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        data[i] = data[i+2];
        data[i+1] = data[i+1];
        data[i+2] = data[i];
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const gbr = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        data[i] = data[i+1];
        data[i+1] = data[i+2];
        data[i+2] = data[i];
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const grb = () => {
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for(let i = 0; i < data.length; i += 4) {
        data[i] = data[i+1];
        data[i+1] = data[i];
        data[i+2] = data[i+2];
    }
    ctx.putImageData(imageData, 0, 0);
    console.log(imageData.data);
}

const clearChanges = () => {
    img.src = reader.result;
}

document.querySelectorAll("button")[0].addEventListener('click', greyScale);
document.querySelectorAll("button")[1].addEventListener('click', sepia);
document.querySelectorAll("button")[2].addEventListener('click', invert);
document.querySelectorAll("button")[3].addEventListener('click', greenToBlue);
document.querySelectorAll("button")[4].addEventListener('click', bgr);
document.querySelectorAll("button")[5].addEventListener('click', gbr);
document.querySelectorAll("button")[6].addEventListener('click', grb);
document.querySelectorAll("button")[7].addEventListener('click', clearChanges);



