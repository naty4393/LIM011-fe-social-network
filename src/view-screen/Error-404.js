export default () => {
  const mainHome = ` 
    <header>
    <a href="/#"><img src=""></a>
    <label  id="label-bar-menu" for="bar-menu" class="icon-menu-outline"></label>
    <input type="checkbox" name="bar-menu" id="bar-menu">
        <nav id="nav" class="nav">
            <ul>
                <li><a href="#/" class="icon-home icon"><b>Inicio</b></a></li>
                <li><a href="#/knowUs" class="icon icon-chat"><b>Conocenos</b></a></li>
                <li><a href="#/signUp" class="icon icon-user-add-1"><b>Registrate</b></a></li>
                <li><a href="#/login" class="icon icon-user"><b>Ingresa</b></a></li>
            </ul>
        </nav>
  </header>       
          <section>
            <h1></h1>
              <article>
                <p></p>
                <p></p> 
              </article>
          </section>
          `;
  const divElement = document.createElement('div');
  divElement.innerHTML = mainHome;
  // eslint-disable-next-line no-console
  console.log(divElement);
  return divElement;
};
