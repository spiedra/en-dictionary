import axios from 'axios'

const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

export const getWordTranslation = async (word) => {
  return axios
    .get(url + word)
    .then((response) => response.data)
    .catch(function (error) {
      if (error.response) {
        return error.response.status
      }
    })
}
