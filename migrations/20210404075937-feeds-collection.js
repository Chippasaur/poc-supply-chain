module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('feeds')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },

  async down(db, client) {
    try {
      await db.dropCollection('feeds')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },
}
