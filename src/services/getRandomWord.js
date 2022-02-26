export const getRandomWord = async () => {
  return fetch('https://wordoftheday2.p.rapidapi.com/words/2020-03-25', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'wordoftheday2.p.rapidapi.com',
      'x-rapidapi-key': 'a045d77fc5msh40a2101bccfea8bp109c9ejsn2b81e36330b2'
    }
  })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.error(err)
    })
}
