import Form from './components/Form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <main>
      <ToastContainer limit={1} />
      <Form />
    </main>
  );
}

export default App;
