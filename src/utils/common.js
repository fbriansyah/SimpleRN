
// return semua object berdasarkan newobject. [NO MUTATION]
// contoh: 
//  state = {name: '', pass: ''}
//  updateObject(state, {name: 'febrian'})
//  hasil -> {name: 'febrian', pass: ''}
export const updateObject = (obj, newObj) => ({...obj, ...newObj})