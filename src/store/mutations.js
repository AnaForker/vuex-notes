import {
  loadCollection,
  db
} from '../datebase'

export default {
  setInitialData(state) {
    loadCollection('notes')
      .then(collection => {
        const _entities = collection.chain()
          .find()
          .simplesort('$loki', true)
          .data()
        state.entities = _entities
      })
  },
  createEntity(state) {
    loadCollection('notes')
      .then((collection) => {
        const entity = collection.insert({
          body: ''
        })
        db.saveDatabase()
        state.entities.unshift(entity)
      })
  },
  updateEntity(state, entity) {
    loadCollection('notes')
      .then((collection) => {
        collection.update(entity)
        db.saveDatabase()
      })
  }
}
