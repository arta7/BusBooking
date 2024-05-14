import React,{useState} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
import UserContext from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [userData, setUserData] = useState([
    {

      UserId: AsyncStorage.getItem("UserId") != null ? AsyncStorage.getItem("UserId") : '',
      Username: AsyncStorage.getItem("Username")!=null ? AsyncStorage.getItem("Username") : '',
      CurrentDate : '',
      StartPlace:'',
      EndPlace:'',
      StartPlaceCode:'11320000',
      EndPlaceCode:'93310000',
      isLoading:true,
      Mobile:AsyncStorage.getItem("Mobile") != null ? AsyncStorage.getItem("Mobile") : '',
      Token:AsyncStorage.getItem("Token") != null ? AsyncStorage.getItem("Token") : '',
      RequestNumber:''
    }]);
  return (
    <Provider store={store}>
        <UserContext.Provider value={{ userData, setUserData }}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
      </UserContext.Provider>
    </Provider>
  );
};
export default App;