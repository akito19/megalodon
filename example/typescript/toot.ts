import * as readline from 'readline'
import Mastodon from '../../src/mastodon'

const rl: readline.ReadLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const BASE_URL: string = 'https://friends.nico'

const access_token: string = '...'

const client = new Mastodon(
  access_token,
  BASE_URL + '/api/v1'
)
new Promise(resolve => {
  rl.question('Toot: ', status => {
    client.post('/statuses', {
      status: status
    })
      .then(res => {
        console.log(res)
        rl.close()
        resolve(res)
      })
      .catch(err => {
        console.error(err)
        rl.close()
      })
  })
})
