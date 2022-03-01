export const getWordDay = async () => {
  return fetch('https://word-of-the-day-omega.vercel.app/word-of-the-day')
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      return error
    })
}
