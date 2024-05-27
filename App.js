import React,{useEffect, useState} from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
import UserContext from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {



      let GetAsyncMobile=async()=>{
        var Mobile =await AsyncStorage.getItem("Mobile")
        // console.log('Mobile',Mobile)
          if(Mobile != null )
           {
            const myNextList = [...userData];
            const DatesStep = myNextList;
            DatesStep[0].Mobile = Mobile;
            setUserData(myNextList)
           }
           else
           {
            const myNextList = [...userData];
            const DatesStep = myNextList;
            DatesStep[0].Mobile = '';
            setUserData(myNextList)
           }
      }

      let GetAsyncToken=async()=>{
        var Token =await AsyncStorage.getItem("Token")
        // console.log('Mobile',Mobile)
          if(Token != null )
         {
          const myNextList = [...userData];
          const DatesStep = myNextList;
          DatesStep[0].Token = Token;
          setUserData(myNextList)
         }
         else
         {
          const myNextList = [...userData];
          const DatesStep = myNextList;
          DatesStep[0].Token = '';
          setUserData(myNextList)
         }
      }


    useEffect(()=>{
      GetAsyncMobile()
      GetAsyncToken()
          // if(Mobile != null)
          // { 
           
          // }
    },[])

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
      Mobile:'',
      Token:'',
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