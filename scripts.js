let currentNumberWrapper = document.getElementById("currentNumber")
const increment = document.getElementById("Increment")
const decrement = document.getElementById("Decrement")
let count = 0


increment.addEventListener("click",
    function Increment() {
        count++;
        if (count <= 10){
            currentNumberWrapper.innerHTML = count;
        }

        if(count > 10) {
            count = 10;
        }

        if (count >= 0){
            currentNumberWrapper.classList.remove("redcolor")
        }
    }
)

decrement.addEventListener("click",
    function Decrement() {
        count--;
        if (count >= -10) {
            currentNumberWrapper.innerHTML = count;
        } 

        if (count < -10){
            count = -10;
        }

        if (count <= 0){
            currentNumberWrapper.classList.add("redcolor")
        }
    }
)