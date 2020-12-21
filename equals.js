module.exports = function equals (obj, other) {
  const keys = Object.getOwnPropertyNames(obj)

  for (let i of keys) {
    if (!Object.is(obj[i], other[i])) {
      if (Array.isArray(obj[i]) && Array.isArray(other[i])) {
        for (let arr in obj[i]) {
          if (obj[i][arr] !== other[i][arr]) {
            return false
          }
        }
      } else if (typeof obj[i] === 'object' && typeof other[i] === 'object') {
        if (Object.getOwnPropertyNames(obj[i]).length !== 0 && Object.getOwnPropertyNames(other[i]).length !== 0) {
          const tempKeys = Object.getOwnPropertyNames(obj[i])

          for (let j of tempKeys) {
            if (!Object.is(obj[i][j], other[i][j])) {
              return false
            }
          }
        } else if (Object.getOwnPropertyNames(obj[i]).length === 0 && Object.getOwnPropertyNames(other[i]).length === 0) {
          continue
        } else {
          return false
        }
      } else {
        return false
      }
    }
  }

  return true
}
