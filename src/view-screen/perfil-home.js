import { SignOutUser } from '../views-controller/sign-out.js';
import { postTemplate } from '../views-controller/createPost.js';
import { storePost, storePosts } from '../views-controller/controller-firebase.js';
import { photo } from '../views-controller/login-user.js';

let number = 0;
export default (user, posts) => {
  const mainHome = ` 
            <header>
            <a href="#/"><img src="../imagen/logo1.png" class="logo"></a>
                <nav id="nav">
                    <ul>  
                        <li><a href="#/perfilHome">Home</a></li>
                        <li><a href="#/myAccount">Mi cuenta</a></li>
                        <li><a href="#/foroAll">Foro</a></li>
                        <li><a href="#/perfil">Perfil</a></li>
                        <li><a href="#/configuration">configuración</a></li>
                          <ul>
                              <li><a id="signOff">Salir</a></li>
                          </ul>
                    </ul>
                </nav>
            </header>       
            <section>
              <img src="${photo(user)}" class="photoIn"></div>
              <section>
                <p>${user.displayName}</p>
                <div><!--para comentar-->
                  <textarea name="post" id="post" cols="30" rows="10" placeholder="¿Que hay de nuevo?"></textarea>
                  <section>
                    <option value="public">Público</option>
                    <option value="private">Privado</option>
                  </section>
                  <button id="share" class="button">Compartir</button>
                </div>
                <div id="addComment"></div>
              </section>
            </section>
            `;
  const divElement = document.createElement('div');
  const bodyElement = document.getElementById('body');
  divElement.innerHTML = mainHome;
  /* const divPost = divElement.querySelector('#addComment'); */
  const post = divElement.querySelector('#post');
  // getPostsOfAllUsers(dataPost => divElement.appendChild(dataPost));
  posts.forEach((postData) => {
    divElement.appendChild(postTemplate(postData));
  });
  bodyElement.setAttribute('class', 'background-perfilHome');
  divElement.querySelector('#share').addEventListener('click', () => {
    number += 1;
    const num = `post${number}`;
    console.log('ingreso boton', num);
    storePost(user, post.value, new Date(), user.displayName, num)
      .then(() => {
        console.log('se guardo en post');
      });
    storePosts(user.uid, post.value, new Date(), user.displayName, num).then((res) => {
      console.log(res);
    });
  });
  divElement.querySelector('#signOff').addEventListener('click', () => {
    SignOutUser();
  });
  return divElement;
};
