import { deletePost } from './controller-firebase.js';

export const deleteThePost = () => {
  const user = firebase.auth().currentUser;
  deletePost(user)
    .then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
};
