import { deleteThePost } from './deletePost.js';

/* let i = 0; */
export const comment = (nameUser, post, number) => {
/*   i += 1; */
/*   const num = i; */
  console.log('ENTRO a commentar', nameUser);
  const comments = ` <section id="section${number}">
                        <h3 id="UserName">${nameUser.displayName}</h2>
                        <h4 id="date"></h3>
                        <p id="content"></p>
                        <ul>
                          <li><a id="editar">Editar</a></li>
                          <li><a id="eliminar${number}" name="${number}">Eliminar</a></li>
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
  console.log('comments', comments);
  console.log('spaceComment', spaceComment);
  const content = spaceComment.querySelector('#content');
  content.innerHTML = post;
  const dateAndHours = spaceComment.querySelector('#date');
  dateAndHours.innerHTML = new Date();
  console.log('post', post);
  console.log('content', content);
  spaceComment.querySelector(`#eliminar${number}`).addEventListener('click', () => {
    console.log('entro a la funcion borrar', number);
    deleteThePost(nameUser);
  /*   spaceComment.removeChild(); */
  });
  /*   const dateAndHours = (() => {
    const dateString = (new Date()).toString();
    self.status = dateString.substring(0, 3 + dateString.lastIndexOf(':'));
    setTimeout('dateAndHours()', 200);
    return dateString;
  });
  window.onload = dateAndHours();
  savePost(nameUser, post, dateAndHours, nameUser.displayName); */
  return spaceComment;
};
