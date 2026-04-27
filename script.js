const button = document.querySelector('button')
const input = document.getElementById('nameInput')

button.addEventListener('click',function(){
    const name = input.value
    alert('Welcome,' + name + '!')
})