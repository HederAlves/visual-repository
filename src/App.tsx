import { Provider } from 'react-redux';
import store from './store';
import { Repositories } from './components/Repositories';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>GitHub Repositories</h1>
        <Repositories />
      </div>
    </Provider>
  );
}

export default App;
