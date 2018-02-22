const url = window.location.host

export const config = {
  url,
  wamp: {
    url: `ws://${url}:80/ws`,
    realm: 'realm1',
  },
}
