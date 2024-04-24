import { Provider } from 'react-redux';
import store from './store';
import { Repositories } from './components/pages/Repositories';

function App() {
  return (
    <Provider store={store}>
      <Repositories />
    </Provider>
  );
}

export default App;
