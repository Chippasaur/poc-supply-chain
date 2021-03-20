module.exports = {
  up(db, client) {
    db.createCollection('users').then(() => {
      db.insert('users', { name: 'Foo' }, function (err, doc) {
        if (err) {
          console.error('user error', err)
        }
      })
    })
  },

  down(db, client) {
    db.dropCollection('users')
  },
}
