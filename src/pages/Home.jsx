import { IonContent, IonGrid, IonRow, IonPage,IonImg, IonButton  } from '@ionic/react';
import img from 'C:/Users/KastooriDasari/Desktop/sky-music/src/Images/logo-removebg-preview.png'
import './Home.css';

const Home = () => {
  return (
    <IonPage >
      <IonContent fullscreen className='content-page'>
        <IonGrid className='content-grid'>
          <IonRow className='grid-row1'><IonImg src={img} alt=" " className='top-img'></IonImg></IonRow>
          <IonRow className='title'>SKY Music</IonRow>
          <IonRow className='sub-title'>Music the voice of soul</IonRow>
          <IonRow className='grid-row3' ><IonButton routerLink='/signin' className='grt-started-btn ion-text-capitalize'> Get Started</IonButton></IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
