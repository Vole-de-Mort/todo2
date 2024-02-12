import { initializeMainSide } from "./loadPage";

export function defaultMainPage(){
    initializeMainSide();
    const container = document.getElementById('main-side');
    const welcome = document.createElement('div');
    welcome.textContent = "What To Do";
    welcome.className ='welcome';
    container.appendChild(welcome);
}