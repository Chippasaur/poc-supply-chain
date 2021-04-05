module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('activities', {
        validator: {
          bsonType: 'object',
          required: ['companyId', 'title', 'content', 'lastUpdatedAt', 'createdAt'],
          properties: {
            companyId: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            title: {
              bsonType: 'string',
              description: 'must be a string and is required',
            },
            lastUpdatedAt: {
              bsonType: 'date',
              description: 'must be a date and is required',
            },
            createdAt: {
              bsonType: 'date',
              description: 'must be a date and is required',
            },
          },
        },
      })
    } catch (error) {
      console.error('migration error: ', error)
    }
  },

  async down(db, client) {
    try {
      await db.dropCollection('activities')
    } catch (error) {
      console.error('migration error: ', error)
    }
  },
}
