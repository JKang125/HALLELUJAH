const button = document.querySelector('button')
const input = document.getElementById('nameInput')

button.addEventListener('click',async function(){
    const name = input.value

    const response = await
    fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json()

    alert('Welcome,' + name + '! Here is your joke:' +data.value)
})