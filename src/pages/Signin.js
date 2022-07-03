
import { IonCard, IonContent, IonHeader, IonPage, IonIcon, IonInput, IonToolbar, IonButton, IonImg, IonText, IonLabel } from '@ionic/react';
import './Signin.css';
import ExploreContainer from "../components/ExploreContainer";
import { logoFacebook, logoGoogle, logoTwitter } from 'ionicons/icons';
const Signin = () =>{
  
    return (
        <IonPage>
           
            <IonContent fullscreen className='ion-content'>
                <IonLabel className='text1'>Welcome Back!  </IonLabel>
                <IonLabel className='text2'> Sign In </IonLabel>
                <IonInput className='email' placeholder='enter email'></IonInput>
                <IonInput className='psw' placeholder='enter password'></IonInput>
                
                <IonButton className='signin-btn' routerLink='/dashboard' shape='round' color={'dark'} fill="solid">Sign In</IonButton>
                <IonLabel className='text3'>Don't have account ? <a className='link'>Sign Up</a> </IonLabel>
               <div className='icon'> 
              
                 <IonIcon style={{fontSize:"20px" ,color:"orange" }}
                  icon={logoFacebook}/>&emsp;
               
                 <IonIcon style={{fontSize:"20px" ,color:"orange" }}
                  icon={logoGoogle}/>&emsp;
                  <IonIcon style={{fontSize:"20px" ,color:"orange" }}
                  icon={logoTwitter}/>
                </div>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};
export default Signin;