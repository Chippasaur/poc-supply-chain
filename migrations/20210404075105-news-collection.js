module.exports = {
  async up(db, client) {
    try {
      await db.createCollection('news', {
        validator: {
          $jsonSchema: {
            bsonType: 'object',
            required: ['companyId', 'content', 'lastUpdatedAt', 'createdAt'],
            properties: {
              companyId: {
                bsonType: 'string',
                description: 'must be a string and is required',
              },
              content: {
                bsonType: 'string',
                description: 'must be a string and is',
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
        },
      })
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
