module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('companies')
      await db.collection('companies').insert({
        name: 'Amazon, Inc',
        logoUrl: '/companies/amazon.png',
        counterpartiesNum: 3518,
        subsidiariesNum: 14,
        facilitiesNum: 329,
      })
    } catch (error) {
      console.error('migration error:', error)
    }
  },

  async down(db, client) {
    try {
      await db.dropCollection('companies')
    } catch (error) {
      console.error('migration error:', error)
    }
  },
}
