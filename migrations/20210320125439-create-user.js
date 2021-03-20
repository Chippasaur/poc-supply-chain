module.exports = {
  async up(db) {
    try {
      await db.createCollection('users')
      await db.insert('users', { name: 'Foo', phone: 'Bar' })
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
