
    let bars = document.getElementById('bars');
    let close = document.getElementById('close');
    let offCanvas = document.getElementById('offcanvas');
    let categoryHeader = document.getElementById('category');
    let categoryBody = document.getElementById('categorybody');
    let downArrow = document.getElementById('downarrow');

    bars.addEventListener('click', ()=> {
        offCanvas.style.transform = "translateX(0)";
        offCanvas.style.opacity = "1";
    });

    close.addEventListener('click', ()=> {
        offCanvas.style.transform = "translateX(-100%)";
        offCanvas.style.opacity = "0";
    });

    categoryHeader.addEventListener('click', () => {
    const isOpen = categoryBody.style.height && categoryBody.style.height !== "0px";

    if (isOpen) {
        categoryBody.style.height = "0";
        categoryBody.style.opacity = "0";
        downArrow.style.transform = "rotate(180deg)";
    } else {
        categoryBody.style.height = "auto";
        categoryBody.style.opacity = "1";
        downArrow.style.transform = "rotate(0)";
    }
});
