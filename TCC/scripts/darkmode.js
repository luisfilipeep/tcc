const togglebtn = document.getElementById('toggle-mode');
const body = document.body

togglebtn.addEventListener('click', function () {
    body.classList.toggle('dark-mode')
})