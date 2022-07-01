import { IonCard, IonContent, IonHeader, IonPage, IonIcon, IonInput, IonToolbar,IonLabel, IonButton, IonImg } from '@ionic/react';

import ExploreContainer from "../components/ExploreContainer";
import { logoFacebook, logoGoogle, personCircle } from 'ionicons/icons';

import './Signup.css';
const Signup: React.FC = () => {
    const goTo=(path:string) => {}
    return (
        <IonPage>
            <IonHeader>
               

            </IonHeader>
            <IonContent fullscreen className='ion-content'>
            <IonLabel className='text1'>Welcome Back!  </IonLabel>
                <IonLabel className='text2'> Sign In </IonLabel>
                <IonInput className='email' placeholder='enter email'></IonInput>
                <IonInput className='psw' placeholder='enter password'></IonInput>
                <IonInput className='cpsw' placeholder='enter confirm password'></IonInput>
               
                    <IonIcon style={{ fontSize: "70px", color: "#0C6A0F" }}
                        icon={personCircle} /><br></br>
                        
                    <div className='padbean'> PadBean</div>
                    <IonInput className="email">Email</IonInput><br></br>
                    <IonInput className="psw">Password</IonInput><br></br>
                    <IonInput className="cpsw">Confirm password</IonInput><br></br>
                    <IonInput className="number">Mobile number</IonInput><br></br>
                    <IonButton className='signup-btn'  color={'#0C6A0F'}  href='/login' onClick={ e => goTo('/Login')}>Sign up</IonButton>
                    <div className='icon-with-text'>
                    <IonIcon style={{ fontSize: "20px", color: "#0C6A0F"}}
                        icon={logoGoogle} /> Login with <a href='#'>Google</a><br></br>
                    <IonIcon style={{ fontSize: "20px", color: "#0C6A0F" }}
                        icon={logoFacebook} />Login with <a href='#'>Facebook</a> 
                    </div><br></br>
                  
                    <div>Already have account? <a href='#'>Login here</a></div>
                    <IonButton className='free-signup-btn' color={'#0C6A0F'} >Signup free</IonButton>
                
        
            </IonContent>
        </IonPage>
    );
};
export default Signup