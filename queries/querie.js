const fs = require('fs')
//this database example come from graphql graphql.github.io

const database = () => {
  let db = fs.readFileSync('./data/database.json', 'utf8')
  return JSON.parse(db)
}

const getStarShips = args => {
  let starShips = database()[2].starShips
  starShips = starShips.filter(elm => args.starships.includes(elm.id))
  return starShips
}

const getHumans = () => {
  let humans = database()[0].humans
  humans.forEach(elm => {
    let friends = elm.friends
    elm.friends = humans.filter(elm2 => friends.includes(elm2.id))
    elm.starships = getStarShips(elm)
  })
  return humans
}

module.exports = { getHumans }
