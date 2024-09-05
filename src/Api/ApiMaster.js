import {Platform, StyleSheet, Text, View,FlatList,Alert,ListView,
    ScrollView,Dimensions,TouchableOpacity,TextInput,ActivityIndicator,Picker,Image} from 'react-native';
 import axios from 'axios'
 import AsyncStorage from '@react-native-async-storage/async-storage';
import {Address} from './Address'
import Toast from 'react-native-simple-toast';
import { RouteName } from '../routes';
// import UserContext from './../../UserContext';
// import React from 'react';

// const { userData, setUserData } = React.useContext(UserContext);



let axisConfig={
    headers:{
        "Accept": "text/plain",
        "Content-Type": "multipart/form-data"
    }
}
// let axisConfigToken={
//     headers:{
//       'accept': 'text/plain',
//         "Access-Control-Allow-Origin": "*",
//          'Authorization' :  userData[0].Token
//     }
// }

export function Registers(_email,_username,_pass,_updateIndicator,self)
{
    let params={
        "username":_username,
        "email":_email,
        "password":_pass
    }
    _updateIndicator(true)
   console.log('address',Address.URL + Address.Account.Register)
  axios.post(Address.URL + Address.Account.Register,params,axisConfig)
  .then( (response)=> {
         
          console.log('response',response.data) 
          _updateIndicator(false) 
          self.navigate('Login')
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data.data[0].messages[0].message)  
  })
}


export function LoginAPI(_phone,self,userData,setUserData,setLoading)
{
   var params =  new FormData();
    params.append("Phone",_phone)
  axios({
    url: Address.URL + Address.Login.Login,
    method: 'POST',
     data: params,
    headers: {
      'accept': 'text/plain',
      'Content-Type' : 'multipart/form-data'
    }
  })
  .then( (response)=> {
         
          // console.log('response login Data',response.data.status) 
          if(response.data.status == 1)
            {
              AsyncStorage.setItem('Mobile',_phone)
              const myNextList = [...userData];
              const DatesStep = myNextList;
              DatesStep[0].Mobile = _phone;
              setUserData(myNextList)
             
           Toast.showWithGravity(response.data.message, Toast.LONG, Toast.CENTER);
          
           self.navigate(RouteName.OTP_VERYFY_SCREEN)
            }
            setLoading(false)
        
  })
  .catch( (error)=> {
    console.log('errors',error)  
    setLoading(false)
  })
}



export function VerifyAPI(_phone,_code,self,setLoading)
{
    var params ={
      "Phone":_phone,
      "VerificationCode":_code
    }
    
  axios({
    url: Address.URL + Address.Login.verify,
    method: 'POST',
     data: params,
    headers: {
      'accept': 'text/plain',
      'Content-Type' : 'multipart/form-data'
    }
  })
  .then( (response)=> {
         
          console.log('response verify Data',response.data.status) 
          if(response.data.status == 1)
            {
           Toast.showWithGravity(response.data.message, Toast.LONG, Toast.CENTER);
           AsyncStorage.setItem('Token',response.data.data.token)
        
             self.replace(RouteName.HOME_SCREEN)
            }
            setLoading(false)
        
  })
  .catch( (error)=> {
    setLoading(false)
    console.log('errors',error)  
  })
}



// export function ForgetPasswords(_email,_updateIndicator,self,check)
// {
//     let params={
//         "email":_email
//     }
//     _updateIndicator(true)
//    console.log('address',Address.URL + Address.Account.ForgetPassword)
//   axios.post(Address.URL + Address.Account.ForgetPassword,params,axisConfig)
//   .then( (response)=> {
         
//           console.log('response forget pass :',response.data.ok) 
//           _updateIndicator(false) 
//           if(response.data.ok && check==true)
//           {
//            self.navigate('OTPAccept',{email:_email})
      
//           }
//           else  if(response.data.ok && check==false)
//           {
//             Toast.showWithGravity('Token Send,Please Check Your Email'
//                 , Toast.LONG, Toast.CENTER);
//           }
//   })
//   .catch( (error)=> {
//     _updateIndicator(false)
//     Toast.showWithGravity(error.response.data.data[0].messages[0].message
//         , Toast.LONG, Toast.CENTER);
//     console.log('errors',error.response.data.data[0].messages[0].message)  
//   })
// }



export function GetCities(setData,Data,self,setLoading,axisConfigToken)
{
  axios.get(Address.URL + Address.Bus.Cities,axisConfigToken)
  .then( (response)=> {


      console.log('response',response.data.data)
      setData(response.data.data)
      setLoading(false)
        
  })
  .catch( (error)=> {
    console.log('errors',error)  
    setLoading(false)
  })
}

export function BusSearch(_originCity,_destinationCity,_date,HeaderValue,setLoading,SetData,setUserData,userData,self)
{
    var params ={
      "originCity": _originCity,
      "destinationCity": _destinationCity,
      "date": _date
    }

    console.log('params',params)
    
  axios({
    url: Address.URL + Address.Bus.search,
    method: 'POST',
     data: params,
    headers: {
      'accept': 'text/plain',
      // 'Content-Type' : 'multipart/form-data',
      'Authorization': HeaderValue
    }
  })
  .then( (response)=> {
         
          console.log('response verify Data',response.data.data) 
          SetData(response.data.data)
      

          const myNextList = [...userData];
          const DatesStep = myNextList;
          DatesStep[0].RequestNumber = response.data.data?.requestNumber;
          setUserData(myNextList)
          setLoading(false)
        
  })
  .catch( (error)=> {
    console.log('errors',error)  
    setLoading(false)
  })
}




export function BusDetails(_requestNumber,_sourceCode,_busCode,HeaderValue,setLoading,SetData,self,setReturnData)
{
    var params ={
      "requestNumber": _requestNumber,
      "sourceCode": _sourceCode,
      "busCode": _busCode
    }
    setLoading(true)
    
  axios({
    url: Address.URL + Address.Bus.busdetails,
    method: 'POST',
     data: params,
    headers: {
      'accept': 'text/plain',
      // 'Content-Type' : 'multipart/form-data',
      'Authorization': HeaderValue
    }
  })
  .then( (response)=> {
         
          console.log('response bus details Data',response.data.data) 
          SetData(response.data.data)
          setLoading(false)
          setReturnData(true)
        
  })
  .catch( (error)=> {
    console.log('errors bus details : ',error)  
    setLoading(false)
    setReturnData(false)
  })
}


export function busPreReserves(_requestNumber,_sourceCode,_busCode,HeaderValue,_passengers,_price,_telephone,_contact
  ,_clientUserTelephone,_clientUserEmail,setLoading,self)
{
    var params ={
    "requestNumber": _requestNumber,
  "busCode": _busCode,
  "sourceCode": _sourceCode,
  "passengers": _passengers,
  "price": _price,
  "telephone": _telephone,
  "contact": _contact,
  "clientUserTelephone": _clientUserTelephone,
  "clientUserEmail": _clientUserEmail
    }
    console.log('params =>',params)
    setLoading(true)
    
  axios({
    url: Address.URL + Address.Bus.busReserves,
    method: 'POST',
     data: params,
    headers: {
      'accept': 'text/plain',
      // 'Content-Type' : 'multipart/form-data',
      'Authorization': HeaderValue
    }
  })
  .then( (response)=> {
         
          console.log('response bus details Data',response.data.data) 
          Toast.showWithGravity(response.data.data.reserveRequestId, Toast.LONG, Toast.CENTER);
         // SetData(response.data.data)
          setLoading(false)
        
  })
  .catch( (error)=> {
    console.log('errors bus details : ',error)  
    setLoading(false)
  })
}




export function SpecialPrograms(_currentdate,_setData,_updateIndicator)
{
     
     _updateIndicator(true)
  axios.get(Address.URL + Address.Main.SpecialProgram + _currentdate,axisConfig)
  .then( (response)=> {
         
        console.log('response data : ',response.data)
        _setData(response.data)
           _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data)  
  })
}

export function StoreFeature(_currentdate,_setData,_updateIndicator)
{
     
     _updateIndicator(true)
  axios.get(Address.URL + Address.Main.StoreFeature + _currentdate,axisConfig)
  .then( (response)=> {
         
        console.log('response data : ',response.data)
        _setData(response.data)
         _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data)  
  })
}


export function AllTags(_setData,_updateIndicator,_returnItem)
{
     
     _updateIndicator(true)
  axios.get(Address.URL + Address.Main.Tags,axisConfig)
  .then( (response)=> {
         
        console.log('response data  tags : ',response.data)

        if(response.data.length > 0)
        {
        var PushData = [];
        PushData.push({
            id: 0,
            name: "All",
            locale: "en",
            published_at: "2021-11-26T23:39:51.000Z",
            created_at: "2021-11-26T23:39:00.000Z",
            updated_at: "2021-11-26T23:39:52.000Z",
            localizations: [ ]
            })
        for(let i=0;i<response.data.length;i++)
        {
            PushData.push(response.data[i])
        }

        
            _returnItem(0)
        }

         

        _setData(PushData)
         _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors',error.response.data)  
  })
}


export function AllProgramTags(_tagId,_setData,_updateIndicator)
{
    var Addr = null
     _updateIndicator(true)
     if(_tagId == 0)
      Addr = axios.get(Address.URL + Address.Main.AllProgramTags,axisConfig)
   else 
   Addr =  axios.get(Address.URL + Address.Main.ProgramTags+_tagId,axisConfig)
  
  Addr.then( (response)=> {
         
        console.log('response program tasg data : ',response.data)
        _setData(response.data)
         _updateIndicator(false) 
  })
  .catch( (error)=> {
    _updateIndicator(false)
    Toast.showWithGravity(error.response.data.data[0].messages[0].message
        , Toast.LONG, Toast.CENTER);
    console.log('errors program tasg',error.response.data)  
  })
}
