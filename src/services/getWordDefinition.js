export const getWordDefinition = async (word) => {
  return fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
