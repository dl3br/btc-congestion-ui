const url = window.location.host

export const config = {
  url,
  wamp: {
    url: `wss://${url}:8080/ws`,
    realm: 'realm1',
  },
}
