module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('alerts')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },

  async down(db, client) {
    try {
      await db.dropCollection('alerts')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },
}
