import './App.css';
// import do componente
import FirstComponent from './components/FirstComponent';
import TemplateExpression from './components/TemplateExpression';
import MyComponent from './components/MyComponent';
import Event from './components/Event';
// import de imagem
import doguinhos from './assets/doguinhos.jpeg';

function App() {
  return (
    <div className="App">
      <p>Fundamentos do React</p>

      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Event />

      <br />

      <div className="doguinhoscontainer">
        <img src={doguinhos} alt="Cachorrinhos salsicha brincando." className="imagem" />
      </div>
    </div>
  );
}

export default App;
