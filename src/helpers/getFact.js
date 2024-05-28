export const getFact = () => {
  const URL_API_RANDOM_FACTS = 'https://catfact.ninja/fact'
  return fetch(URL_API_RANDOM_FACTS)
    .then(res => res.json())
    .then(data => { return data.fact })
}
