const renderPokemon = (poke) => {
    const panel = document.querySelector('#poke-info')
    const pokeInfo = `
    <h1>${poke.id} | ${poke.name}</h2>
    <p>Weight: ${poke.weight} pounds</p>
    <p>Height: ${poke.height} feet</p>
    <img src="${poke.sprites.front_default}">
    `
    panel.insertAdjacentHTML('beforeend', pokeInfo)
    renderAbilities(poke, panel)
    renderMoves(poke)
}

const renderAbilities = (poke, panel) => {
    panel.insertAdjacentHTML('afterend', '<div id="abilities"></div>')
    const abilityList = document.querySelector('#abilities')
    const listHeading = document.createElement('h2')
    listHeading.innerText = `${poke.name} abilities`
    abilityList.prepend(listHeading)
    const list = document.createElement('ul')
    abilityList.append(list)
    poke.abilities.forEach(function(abilityObj) {
        const listItem = document.createElement('li')
        listItem.innerText = abilityObj.ability.name
        list.append(listItem)
    })
}

const renderMoves = (poke) => {
    const abilityList = document.querySelector('#abilities')
    abilityList.insertAdjacentHTML('afterend', '<div id="moves"></div>')
    const moves = document.querySelector('#moves')
    const movesHeading = document.createElement('h2')
    movesHeading.innerText = `${poke.name} moves`
    moves.prepend(movesHeading)
    const list = document.createElement('ul')
    moves.append(list)
    poke.moves.forEach(function(movesObj) {
        const listItem = document.createElement('li')
        listItem.innerText = movesObj.move.name
        list.append(listItem)
    })
}

const getId = () => {
    const queryParams = window.location.search
    const id = queryParams.substr(1)
    return id
}

const fetchInfo = () => {
    const id = getId()
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
        .then(resp => resp.json())
        .then(json => renderPokemon(json))
}

fetchInfo()