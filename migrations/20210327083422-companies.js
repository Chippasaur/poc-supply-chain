module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('companies')
      await db.collection('companies').insert({
        name: 'Amazon, Inc',
        logo_url: '/companies/amazon.png',
        counterparties_num: 3518,
        subsidiaries_num: 14,
        facilities_num: 329,
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
