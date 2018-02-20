const url = '159.100.247.219'

export const config = {
  url,
  wamp: {
    url: `ws://${url}:8080/ws`,
    realm: 'realm1',
  },
}
