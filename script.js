const button = document.getElementById('button')

const toggleMessage = () => {
  document.getElementById('message').classList.toggle('hide')
}
button.addEventListener('click', toggleMessage)