const url = window.location.host

export const config = {
  url,
  wamp: {
    url: `wss://${url}/ws`,
    realm: 'realm1',
    user: 'fee_payer',
  },
}
