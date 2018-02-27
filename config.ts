const url = window.location.host

export const config = {
  url,
  wamp: {
<<<<<<< HEAD
    url: `wss://${url}:8080/ws`,
=======
    url: `ws://${url}:8080/ws`,
>>>>>>> d117b3a... change port to 8080 for ws
    realm: 'realm1',
  },
}
