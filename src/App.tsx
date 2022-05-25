import React from 'react';
import {store} from './store/store';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation/Navigation';
import ReactQueryClientProvider from './components/ReactQueryClientProvider/View/ReactQueryClientProvider';

const App = () => {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
            <ReactQueryClientProvider>
                <Navigation/>
            </ReactQueryClientProvider>
        </SafeAreaProvider>
    </Provider>
  );
};

export default App;
