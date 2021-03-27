module.exports = {
  async up(db) {
    try {
      await db.createCollection('users')
      await db.insert('users', {
        name: 'Matt',
        email: 'example@example.com',
        company_name: 'Amazon, Inc',
      })
    } catch (error) {
      console.error('migration error', error)
    }
  },

  async down(db) {
    try {
      await db.dropCollection('users')
    } catch (error) {
      console.log('migration error', error)
    }
  },
}
