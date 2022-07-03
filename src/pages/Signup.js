import { IonCard, IonContent, IonHeader, IonPage, IonIcon, IonInput, IonToolbar,IonLabel, IonButton, IonImg } from '@ionic/react';
import {useRef,useState} from "react";
// import {signin,Signout,Signin,useAuth} from './firebase';
import ExploreContainer from "../components/ExploreContainer";
import { logoFacebook, logoGoogle, personCircle } from 'ionicons/icons';
import {Signup, Signin, useAuth} from './firbase';
import './Signup.css';
import { async } from "@firebase/util";

const Signupp=()=>{
    const [loading, setLoading] = useState(false);
    const currentUser = useAuth();
  
    const emailRef = useRef();
    const passwordRef = useRef();
  
    async function handleSignup() {
      setLoading(true);
      //  try{
      await Signup(emailRef.current.value, passwordRef.current.value);
      //}catch{
      //alert("Error!");
      // }
      setLoading(false);
    }

    
  async function handleSignin() {
    setLoading(true);
    try {
      await Signin(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }

//   async function handleLogout() {
//     try {
//       await Signout();
//     } catch {
//       alert("Error!");
//     }
  


    return (
        <IonPage>
            <IonHeader>
               

            </IonHeader>
            <IonContent fullscreen className='ion-content'>
                <div className='text'>
                <IonLabel className='text1'>Create an account</IonLabel>
                <IonLabel className='text2'>Sign Up</IonLabel>
                </div>
                <IonInput className='email' type='email' ref={emailRef} placeholder='enter email'></IonInput>
                <IonInput className='psw' type='password' ref={passwordRef} placeholder='enter password'></IonInput>
                <IonInput className='cpsw' placeholder='enter confirm password'></IonInput>
                <IonButton className='signup-btn' routerLink='/dashboard' shape='round' color={'dark'} fill="solid">Sign Up</IonButton>
                <IonLabel className='text3'>Back to <a href='Signin.tsx' color='danger'>Sign In</a> </IonLabel>

                
            </IonContent>
        </IonPage>
    );
    
};
export default Signupp