const set = new Set(arr.map(el => {
    const id = el.id
    return arr.find(el => el.id === id)
}))
