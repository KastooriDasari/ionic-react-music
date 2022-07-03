import { IonAvatar, IonButton, IonCard, IonContent, IonImg, IonItem, IonLabel, IonPage, IonText,  } from '@ionic/react';
import './Home.css';
import ExploreContainer from "../components/ExploreContainer";
// import img from './assets/images/logo-removebg-preview.png';
// import img1 from './public/assets/images/logo-removebg-preview.png'
  const Home=() => {
    
    return (
      <IonPage className='ion-page'> 
        <IonContent fullscreen className='ion-content'>
      <div className='const'>
        {/* <IonImg src={img} alt=" " className='top-img'></IonImg>
        <IonImg src={img1} alt=" " className='top-img1'></IonImg> */}
        <IonLabel className='text' color={'light'} style={{fontWeight: "bold"}}>SKY Music</IonLabel>
        <IonButton routerLink='/signin' className='get-started-btn' shape='round' color={'orange'} >Get Started</IonButton>
        </div>
        </IonContent>
      </IonPage>
    );
  };
  export  default Home;