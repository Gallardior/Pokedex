const searchPokemon = async pokemon => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await response.json()
  console.log(data)
}

const searchBtn = document.getElementById('search')
const texTarea = document.getElementById('texTarea')

searchBtn.addEventListener('click', () => {
  const pokeSearch = textTarea.firstElementChild.innerHTML
  console.log(pokeSearch)
})

