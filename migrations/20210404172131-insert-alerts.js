module.exports = {
  async up(db, client) {
    try {
      await db.collection('alerts').insert({
        supplierName: 'Xinjiang Cotton',
        source: 'sourcingjournal.com',
        content: 'Xinjiang Cotton Faces Sweeping New Western Sanctions',
        level: 'HIGH',
        createAt: new Date('2021-01-13'),
        lastUpdateAt: new Date('2021-01-13'),
      })

      await db.collection('alerts').insert({
        supplierName: 'Merces Apparel Co., LTD',
        source: 'Euler Hermes',
        content: 'Merces Apparel Co., LTD has had a credit issue: Credit report has changed from Amber to Red',
        level: 'LOW',
        createAt: new Date('2021-01-08'),
        lastUpdateAt: new Date('2021-01-08'),
      })

      await db.collection('alerts').insert({
        supplierName: 'Grand Group',
        source: 'D&B',
        content: 'Grand Group Standard industrial Classification (SIC) rating has dropped below requirements',
        level: 'MEDIUM',
        createAt: new Date('2020-12-28'),
        lastUpdateAt: new Date('2020-12-28'),
      })

      await db.collection('alerts').insert({
        supplierName: 'Fast Sourcing Group',
        source: 'Bloomberg',
        content: 'Fast Sourcing Group Shipment failed quality assessment',
        level: 'MEDIUM',
        createAt: new Date('2020-12-21'),
        lastUpdateAt: new Date('2020-12-21'),
      })
    } catch (error) {}
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
}
