const btn = document.getElementById('menu_btn')
const nav = document.getElementById('_menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
})

