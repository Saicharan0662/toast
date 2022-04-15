const btn = document.querySelector(".btn");
const toast = document.querySelector("#toast");
const toastText = document.querySelector("#toastText");
const toastMsg = document.querySelector("#toastMsg");

btn.addEventListener('click', () => {
    toastText.innerHTML = toastMsg.value

    toast.className = "show-toast"

    setTimeout(() => {
        toast.className = ""
    }, 2800);
})