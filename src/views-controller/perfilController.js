import { dataOfUsers } from './controller-firebase.js'

export const dataUser = () => {

  dataOfUsers()
    .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } 
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
}