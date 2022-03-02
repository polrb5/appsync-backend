const chance = require('chance').Chance()

const a_random_user = () => {
  const firstName = chance.first({ nationality: 'en'})
  const lastName = chance.first({ nationality: 'en'})
  const suffix = chance.string({ length: 4, pool: 'abcdefeghijklmnopqrstuvwxyz' })
  const name = `${firstName} ${lastName} ${suffix}`
  const password = chance.string({ length: 8 })
  const email = `${firstName}-${lastName}-${suffix}@zizeron.tech`

  return {
    name, email, password
  }
}

module.exports = {
    a_random_user
}