const axios = require('axios')

describe('Testing the if show users', () => {
  test('It should response the GET method', () => {
    return axios.post('http://localhost:5000/',
    {query: `{
      getHumans{
        name
        appearsIn
        homePlanet
        height
        mass
        friends{
          name
          appearsIn
          starships{
            length
          }
        }
        starships{
          name
        }
      }
    }`})
    .then(res => {
      expect(res.status).toBe(200)
    })
  })
})
