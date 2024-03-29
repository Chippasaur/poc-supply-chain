module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('notifications')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },

  async down(db, client) {
    try {
      await db.dropCollection('notifications')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },
}
