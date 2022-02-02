const Timeout = (time) => {
  let controller = new AbortController()
  setTimeout(() => controller.abort(), time * 1000)
  return controller
}

function getCategories() {
  return fetch('https://apitesting.plerk.io/v2/category', {
    signal: Timeout(2).signal,
    headers: {
      Authorization: process.env.VUE_APP_TOKEN,
    },
  })
}

export { getCategories }
