//import de estilos
import './App.css';

//import do componente
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Event from './components/Event';
import Challenge from './components/Challenge';

//import de imagem
import doguinhos from './assets/doguinhos.jpeg';

<div>
  <Event/>

      <br />

      <h3>Desafio 1:</h3>
            <div className="doguinhoscontainer">
        <img src={doguinhos} alt="Cachorrinhos salsicha brincando." className="imagem" />
      </div>

      <br/>
      <h3>Desafio 2:</h3>
      <Challenge/>
      <br/>
    </div>

      
  

export default App;