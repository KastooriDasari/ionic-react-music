import { IonCard, IonContent, IonHeader, IonPage, IonIcon, IonInput, IonToolbar, IonButton, IonImg } from '@ionic/react';

import ExploreContainer from "../components/ExploreContainer";
import { logoFacebook, logoGoogle, personCircle } from 'ionicons/icons';
import Login from './quize-login';
const Signup: React.FC = () => {
    const goTo=(path:string) => {}
    return (
        <IonPage>
            <IonHeader>
                {/* <IonToolbar color="Primary">PodBean</IonToolbar> */}

            </IonHeader>
            <IonContent fullscreen>
                <div className='card'>
                    <IonIcon style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={personCircle} />
                    <div className='padbean'> PadBean</div>
                    <IonInput className="email">Email</IonInput>
                    <IonInput className="psw">Password</IonInput>
                    <IonInput className="cpsw">Confirm password</IonInput>
                    <IonInput className="number">Mobile number</IonInput>
                    <IonButton className='signup-btn' onClick={ e => goTo('/Login')}>Sign up</IonButton>
                    <div className='icon-with-text'>
                    <IonIcon style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={logoGoogle} /> <div>Login with Google</div>
                    <IonIcon style={{ fontSize: "70px", color: "#0040ff" }}
                        icon={logoFacebook} /> <div>Login with Facebook</div>
                    </div>
                    <div className="line"></div>
                    <div>Already have account? Login here</div>
                    <IonButton className='free-signup-btn'>Signup free</IonButton>
                </div>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};
export default Signup;