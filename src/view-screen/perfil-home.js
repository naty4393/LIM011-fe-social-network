import { SignOutUser } from '../views-controller/sign-out.js';
import { comment } from '../views-controller/createPost.js';
import { savePost } from '../views-controller/controller-firebase.js';

let number = 0;
export default (user) => {
  console.log('entro en data', user);
  console.log('entro en data y su info', user.uid);
  const mainHome = ` 
          <header>
          <a href="#/"><img src="" alt=""></a>
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
            <div src=""></div><!--Foto-->
            <section>
              <p>${user.displayName}</p>
              <div><!--para comentar-->
                <textarea name="post" id="post" cols="30" rows="10" placeholder="¿Que hay de nuevo?"></textarea>
                <section>
                  <option value="public">Público</option>
                  <option value="private">Privado</option>
                </section>
                <button id="share">Compartir</button>
              </div>
              <div id="addComment"></div>
            </section>
          </section>
          `;
  const divElement = document.createElement('div');
  const bodyElement = document.getElementById('body');
  divElement.innerHTML = mainHome;
  const post = divElement.querySelector('#post');
  bodyElement.setAttribute('class', 'background-perfilHome');
  divElement.querySelector('#share').addEventListener('click', () => {
    number += 1;
    console.log('ingreso boton');
    divElement.appendChild(comment(user, post.value, number));
    savePost(user, post.value, new Date(), user.displayName, number);
  });
  divElement.querySelector('#signOff').addEventListener('click', () => {
    SignOutUser();
  });
  return divElement;
};
