const url = window.location.host

export const config = {
  url,
  wamp: {
    url: `ws://${url}:8080/ws`,
    realm: 'realm1',
  },
}
