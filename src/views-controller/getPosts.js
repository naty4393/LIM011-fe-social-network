import { getPost } from './controller-firebase.js';

export const getThePosts = (funcionparasacardatos) => {
  getPost().orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    const usersOfPost = [];
    querySnapshot.forEach((doc) => {
      const postWithUser = {
        id: doc.data().idUser,
        name: doc.data().username,
        numPost: doc.data().post,
        sms: doc.data().post,
        date: doc.data().date,
      };
      usersOfPost.push(postWithUser);
    });
    funcionparasacardatos(usersOfPost);
  });
};
