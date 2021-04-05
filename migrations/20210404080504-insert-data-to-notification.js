module.exports = {
  async up(db, client) {
    try {
      for (let i = 0; i < 10; i++) {
        await db.collection('notifications').insert({
          supplierName: 'COOPERATIVA TEXTIL SEUCA LTDA.',
          type: i % 5,
          createdAt: new Date('2021-1-23 16:00:00 UTC'),
        })
      }
      for (let i = 0; i < 10; i++) {
        await db.collection('notifications').insert({
          supplierName: 'FE NEW CENTURY INDUSTRY (SINGAPORE) PTE LTD',
          type: i % 5,
          createdAt: new Date('2021-2-23 16:00:00 UTC'),
        })
      }
      for (let i = 0; i < 10; i++) {
        await db.collection('notifications').insert({
          supplierName: 'GOLD LONG JOHN CHINA',
          type: i % 5,
          createdAt: new Date('2021-2-2 16:30:00 UTC'),
        })
      }
      for (let i = 0; i < 10; i++) {
        await db.collection('notifications').insert({
          supplierName: 'JIANSHAN BENHUI PRINTING CO., LTD',
          type: i % 5,
          createdAt: new Date('2021-2-10 8:00:00 UTC'),
        })
      }
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
