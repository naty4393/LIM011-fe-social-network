import { SignOutUser } from '../views-controller/sign-out.js'
import { dataUser } from '../views-controller/perfilController.js'
export default () => {

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
            <div src=""></div>
            <section>
              <div>
                <textarea name="post" id="post" cols="30" rows="10" placeholder="¿Que hay de nuevo?"></textarea>
                <p id="get">hola</p>
              </div>
            </section>
          </section>
          `;
  
    const divElement = document.createElement('div');
    const bodyElement = document.getElementById('body');
    bodyElement.setAttribute('class','background2');
    divElement.innerHTML = mainHome;
    divElement.querySelector('#get').addEventListener('click', () => {
      dataUser();
    });
    divElement.querySelector('#signOff').addEventListener('click', () => {
      SignOutUser();
    });
    return divElement;
  };