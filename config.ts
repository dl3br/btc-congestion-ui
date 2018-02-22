const url = window.location.host

export const config = {
  url,
  wamp: {
    url: `ws://${url}/ws`,
    realm: 'realm1',
  },
}
