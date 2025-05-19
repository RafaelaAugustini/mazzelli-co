
const popup = document.getElementById('popup');
const close = document.getElementById('close');

window.addEventListener("load", () => {
    popup.showModal();
});

close.addEventListener("click", () => {
    popup.close();
});

const scrollButton = document.getElementById("button-top");

scrollButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const container = document.querySelector(".reviews"); 

let scrolling = false; 
let scrollDirection = 0; 
const scrollSpeed = 3; 
let isMouseInside = false; 

function smoothScroll() { 
    if (scrolling && isMouseInside) { 
        container.scrollLeft += scrollDirection * scrollSpeed; 
        requestAnimationFrame(smoothScroll); 
    }
}

container.addEventListener('mousemove', (e) => { 
    if (!isMouseInside) return; 

    const containerWidth = container.offsetWidth; 
    
    const mouseX = e.clientX; 

    if (mouseX < containerWidth * 0.3) { 
        scrollDirection = -1; 
        if (!scrolling) { 
            scrolling = true;
            smoothScroll();
        }
    } else if (mouseX > containerWidth * 0.7) { 
        scrollDirection = 1; 
        if (!scrolling) {
            scrolling = true;
            smoothScroll();
        }
    } else {
        scrolling = false; 
    }
});

container.addEventListener('mouseenter', () => { 
    isMouseInside = true;
});

container.addEventListener('mouseleave', () => { 
    isMouseInside = false;
    scrolling = false;
});


