export default () => {
  const mainKnowsUs = `
    <header>
        <a href="/#"><img src="" alt="">
        <nav id="nav">
            <ul>
                <li><a href="#/">Inicio</a></li>
                <li><a href="#/knowUs">Conocenos</a></li>
                <li><a href="#/signUp">Registrate</a></li>
                <li><a href="#/login">Ingresa</a></li>
            </ul>
        </nav>
    </header>      
    <section>
    <h1>¿Que Significa PoWeR- Wo.!</h1>
        <article>
            <p>Power Wo, es una red social, en la cual las personas pueden ayudar a mas personas.</p>
                <h3>Pero, Como se puede hacer eso...?</h3>
            <p>Es de una manera mucho mas sencilla y mucho mas accesible para las personas, ya que
               sabemos que es la era digital, y nos encanta publicar cosas; ahora por esta red publica
               cosas que van mas allá de solo likear una foto, sino que tambien puedes likear y un metodo de ayuda
               y para distintos temas</p> 
                <h3>Y como funciona?</h3>
            <p>Funciona de la siguiente manera...</p>
                .....
        </article>
    </section>
    `;

  const divElement = document.createElement('div');
  divElement.innerHTML = mainKnowsUs;
  // eslint-disable-next-line no-console
  console.log(divElement);
  return divElement;
};
