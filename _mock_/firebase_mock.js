const firestore = () => {
    return {
        collection: (nameCollection) => {
            return {
                add: () => {
                    return new Promise ((resolve)=>{
                        resolve('La accción realizada fue un éxito')
                    })
                }
            }
        }
    }
}

const firebase ={
  firestore,
}

export default jest.fn(() =>{
    return firebase;
})

