const searchPokemon = async pokemon => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await response.json()
  console.log(data)
}

const searchBtn = document.getElementById('search')
const form = document.getElementById('form')
const text = form.firstElementChild

// searchBtn.addEventListener('click', () => {
//   form.submit()
//   const pokeSearch = form.firstElementChild.innerHTML

//   console.log(pokeSearch)
// })



form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(text.value)
  text.value = '' 
})

searchBtn.addEventListener('click', () => {
  console.log(text.value)
  text.value = '' 
})