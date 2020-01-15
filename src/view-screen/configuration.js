import { SignOutUser } from '../views-controller/sign-out.js'

export default () => {
    const mainHome = ` 
          <header>
          <a href="#/"><img src="../imagen/images(2).jpg" alt=""></a>
              <nav id="nav">
                  <ul>
                      <li><a href="#/perfilHome">Inicio</a></li>
                      <li><a href="#/myAccount">Mi cuenta</a></li>
                      <li><a href="#/foroAll">Foro</a></li>
                      <li><a href="#/perfil">Perfil</a></li>
                      <li><a href="#/configuration">configuración</a></li>
                      <ul>
                          <li><a href="#/signOff">Salir</a></li>
                        </ul>
                  </ul>
              </nav>
          </header>       
          <section>
            <div src=""></div>
            <section>
              <div>
              <textarea name="post" id="post" cols="30" rows="10"></textarea>
              </div>
            </section>
          </section>
          `;
  
    const divElement = document.createElement('div');
    divElement.innerHTML = mainHome;
    divElement.querySelector('#signOff').addEventListener('click', () => {
      SignOutUser();
    })
    return divElement;
  };