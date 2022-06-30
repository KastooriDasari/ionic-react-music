import { IonCard, IonContent, IonHeader, IonPage, IonIcon, IonInput, IonToolbar, IonButton, IonImg } from '@ionic/react';

import ExploreContainer from "../components/ExploreContainer";
import { logoFacebook, logoGoogle, personCircle } from 'ionicons/icons';
const Login: React.FC = () => {
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
                    <div className='Login-header'> Login</div>
                    <div className="line"></div>
                    <IonInput className="email">Email</IonInput>
                    <IonInput className="psw">Password</IonInput>
                    
                    <IonButton className='login-btn' onClick={ e => goTo('/Dashboard')}>Login</IonButton>
                </div>
                <ExploreContainer />
            </IonContent>
        </IonPage>
    );
};
export default Login;