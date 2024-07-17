
big = false;

function makebigger(image) {
    big = !big
    if (big) {
        image.style.width = "90%";
    } else {
        image.style.width = "250px";
    }
    
}