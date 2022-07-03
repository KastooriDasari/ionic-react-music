import { IonAvatar, IonButton, IonCard, IonContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonText,  } from '@ionic/react';
import './Home.css';
import ExploreContainer from "../components/ExploreContainer";
import { arrowBack } from 'ionicons/icons';

  const Dashaboard=() => {
    
    return (
      <IonPage className='ion-page'> 
        <IonContent fullscreen className='ion-content'>
      <div className='const'>
      <IonIcon style={{fontSize:"20px" ,color:"orange" }}
                  icon={arrowBack}/>&emsp;
               
        <IonInput className='searchbar'  placeholder='Search'></IonInput>
        <div className='text'>
        <IonLabel>All</IonLabel>&emsp;&emsp;<IonLabel>Artist</IonLabel>&emsp;&emsp;<IonLabel>Albums</IonLabel>
        </div>
        <IonLabel>Recently Played</IonLabel>
        <div className='list'>
        <IonCard className='list-items'></IonCard>
        <IonCard  className='list-items'></IonCard>
        <IonCard  className='list-items'></IonCard>
        </div>
        <IonLabel>Top Artists</IonLabel>
        <IonButton routerLink='/signin' className='get-started-btn' shape='round' color={'orange'} >Get Started</IonButton>
        </div>
        </IonContent>
      </IonPage>
    );
  };
  export  default Dashaboard;