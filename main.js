



let number = 1
const btn = document.querySelector("button");
btn.addEventListener("click", function() {
    let liElement = document.createElement('li');
    document.body.appendChild(liElement);
    liElement.textContent = number;
    if (number%3 === 0) {
        liElement.classList.add('big');
    }
    number+=2;
});