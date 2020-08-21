const searchBtn = document.getElementById('search'),
      deleteBtn = document.getElementById('delete'),
      form = document.getElementById('form'),
      text = form.firstElementChild,
      pokemonDatos = document.getElementById('pokemon__datos'),
      pokemonImg = document.getElementById('pokemon__img'),
      pokemonStats = document.getElementById('pokemon__stats'),
      btnRandom = document.getElementById('btn__random'),
      btnLeft = document.getElementById('button__left'),
      btnRight = document.getElementById('button__right')
let pokemonId = 0

const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const random = () => {
  return parseInt(Math.random() * (800 - 1) + 1)
}

const searchPokemon = async pokemon => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  if(response.status === 200)
  {
    const data = await response.json()
    drawPokemon(data)
  }else{ alert("Nombre de pokemon no valido") }
}

const searchPokemonById = async id => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  if(response.status === 200)
  {
    const data = await response.json()
    drawPokemon(data)
  }
}

const drawPokemon = pokm => {
  pokemonImg.setAttribute('src', pokm.sprites.front_default)
  pokemonImg.classList.remove('o-0')
  pokemonDatos.classList.remove('o-0')
  pokemonStats.innerHTML = `<span>${capitalize(pokm.name)}</span>
                            <span>${capitalize(pokm.types[0].type.name)}</span>
                            <span>${pokm.stats[0].base_stat}</span>
                            <span>${pokm.stats[1].base_stat}</span>
                            <span>${pokm.stats[2].base_stat}</span>
                            <span>${pokm.stats[5].base_stat}</span>`
  pokemonId = pokm.id
}

form.addEventListener('submit', e => {
  e.preventDefault()
  const pokemon = text.value.toLowerCase().trim()
  searchPokemon(pokemon)
  text.value = '' 
})

searchBtn.addEventListener('click', () => {
  const pokemon = text.value.toLowerCase().trim()
  searchPokemon(pokemon)
  text.value = '' 
})

deleteBtn.addEventListener("click", () => {
  pokemonDatos.classList.add('o-0')
  pokemonImg.classList.add('o-0')
  for(pokemon of pokemonStats.querySelectorAll('span'))
  {
    pokemon.remove()
  }
})

btnRandom.addEventListener('click', () =>{
  let n = random()
  searchPokemonById(n)
})

btnRight.addEventListener('click', ()=> {
  searchPokemonById(pokemonId + 1)
})

btnLeft.addEventListener('click', ()=> {
  searchPokemonById(pokemonId - 1)
})