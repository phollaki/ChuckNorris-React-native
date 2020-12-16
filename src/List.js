export function getList() {
    return fetch('http://api.icndb.com/jokes')
      .then(data => data.json())
  }