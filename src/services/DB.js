 /**
  *  Permite crear una base de datos por defecto con una semilla inicial.
  *  @param {[{key: String, value: String | Object}, ...]} dbs
  *  @return void
  */
 const createDB = (dbs) =>
     dbs.map((db) =>
         (store.get(db.key) === null) ?
         store.set(db.key, db.value) :
         void 0);

const DB = {
    daniela: {
        costume: 'daniela'
    },
    worlds: [
        {
            name: 'Level1',
            passed: false
        }
    ]
}

 export default {
     createDB,
     DB
 };