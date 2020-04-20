/* import { getThePosts } from './getPosts.js'; */
/* import { deleteThePost } from './deletePost.js'; */

export const postTemplate = (array) => {
  const comments = ` <section id="section">
                        <h3 id="UserName" class="namePost">${array.name}</h2>
                        <h4 id="date">${array.date}</h3>
                        <p id="content">${array.sms}</p>
                        <ul>
                          <li><a id="editar">Editar</a></li>
                          <li><a id="${array.id}" name="">Eliminar</a></li>
                        </ul>
                        <section>
                          <option value="publico">Público</option>
                          <option value="privado">Privado</option>
                        </section>
                        <label for=""></label>
                        <input type="checkbox" name="like" id="">
                        <label for=""></label>
                        <input type="checkbox" name="love" id="">
                      </section>`;
  const spaceComment = document.createElement('div');
  spaceComment.innerHTML = comments;
  spaceComment.setAttribute('class', 'background-perfilHome');
  return spaceComment;
};

/*  export const getPostsOfAllUsers = (callback) => {
  getThePosts((arr) => {
    arr.forEach((array) => {
      post(array);
      callback(spaceComment);
    });
  });
};  */
