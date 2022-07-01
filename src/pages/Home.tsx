import { IonAvatar, IonButton, IonCard, IonContent, IonImg, IonItem, IonLabel, IonPage, IonText,  } from '@ionic/react';
import './Home.css';
import ExploreContainer from "../components/ExploreContainer";
import img from 'C:/Users/KastooriDasari/Desktop/React/Music-Application/src/image/logo-removebg-preview.png';
  const Home: React.FC = () => {
    
    return (
      <IonPage className='ion-page'>
        <IonContent fullscreen className='ion-content'>
      <div className='const'>
        <IonImg src={img} alt=" " className='top-img'></IonImg>
        <IonLabel className='text' color={'light'} style={{fontWeight: "bold"}}>SKY Music</IonLabel>
        <IonButton routerLink='/signin' className='get-started-btn' shape='round' color={'orange'} >Get Started</IonButton>
        </div>
        </IonContent>
      </IonPage>
    );
  };
  export  default Home;