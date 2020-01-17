export const dataUser = () => {

    firebase.firestore().collection('user').doc(user.uid).get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
        } 
      }).catch((error) => {
        console.log("Error getting document:", error);
      });
}