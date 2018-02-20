const url = '185.19.28.13'

export const config = {
  url,
  wamp: {
    url: `ws://${url}:8080/ws`,
    realm: 'realm1',
  },
}
