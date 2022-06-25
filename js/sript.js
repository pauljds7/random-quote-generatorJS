let currentTime = Date.now();
const debugging = true;
document.addEventListener("DOMContentLoaded",
    () => {
        if (debugging) {
            console.log("Dom loading took: " + (Date.now() -currentTime ) +'ms');
        }
    }
    
);