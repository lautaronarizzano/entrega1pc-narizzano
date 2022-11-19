import './App.css'
import NavBar from './componentes/NavBar/Navbar'
import './componentes/NavBar/NavBar.css';
import ItemListContainer from './componentes/pages/ItemListContainer/ItemListContainer';
import './componentes/pages/ItemListContainer/ItemListContainer.css'


function App() {

  return (
    <div className="App">
      <NavBar />
      <ItemListContainer
      greeting={'Aca iran los productos'}
      />
    </div>
  )
}

export default App
