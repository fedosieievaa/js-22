import Post from './components/Post';
import { store } from './redux/store';
import { Provider } from 'react-redux';


function App() {
  return(
    <Provider store={store}>
        <Post/>
    </Provider>
  );
}

export default App;