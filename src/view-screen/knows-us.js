export default () => {
  const mainKnowsUs = `
  <header>
  <a href="/#"><img src="../imagen/logo1.jpeg" class="logo1"></a>
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
    <section class="center">
    <h1 class="title text-shadow">¿Que Significa PoWeR- Wo ?</h1>
        <article>
            <p class="write-block-p">Power Wo, es una red social, en la cual las personas pueden ayudar a mas personas.</p>
                <h3 class="title">Pero, Como se puede hacer eso...?</h3>
            <p class="write-block-p">Es de una manera mucho mas sencilla y mucho mas accesible para las personas, ya que
               sabemos que es la era digital, y nos encanta publicar cosas; ahora por esta red publica
               cosas que van mas allá de solo likear una foto, sino que tambien puedes likear y un metodo de ayuda
               y para distintos temas</p> 
                <h3 class="title">Y como funciona?</h3>
            <p class="write-block-p">Funciona de la siguiente manera...</p>
        </article>
    </section>
    `;
  const divElement = document.createElement('div');
  divElement.innerHTML = mainKnowsUs;
  const bodyElement = document.getElementById('body');
  bodyElement.setAttribute('class', 'background-knowsUs');
  return divElement;
};
