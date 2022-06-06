import { Rotas } from './rotas'
import Global from './styles/Global'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function App() {

  return (
    <>
      <Rotas />
      <Global />
    </>
  );
}

export default App;
