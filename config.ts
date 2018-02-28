const url = window.location.host

export const config = {
  url,
  wamp: {
    url: `https://${url}/ws`,
    realm: 'realm1',
  },
}
