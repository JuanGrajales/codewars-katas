// https://www.codewars.com/kata/525c65e51bf619685c000059/train/javascript

function cakes(recipe, available) {
    return Math.min(...Object.keys(recipe).map(key => Math.floor(available[key]/recipe[key] || 0)))
}