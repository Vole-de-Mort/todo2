export function initializeMainSide(){
    let mainContainer = document.getElementById('main-side');
    // Clear the main container before displaying new content
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
}