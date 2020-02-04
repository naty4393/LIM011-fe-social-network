import { getPost } from './controller-firebase.js';

export const getThePosts = () => {
  getPost().onSnapshot((allPost) => {
    console.log(allPost);
  });
};
