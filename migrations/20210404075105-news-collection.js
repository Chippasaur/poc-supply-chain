module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('news')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },

  async down(db, client) {
    try {
      await db.dropCollection('news')
    } catch (error) {
      console.error('miirgration error: ', errors)
    }
  },
}
