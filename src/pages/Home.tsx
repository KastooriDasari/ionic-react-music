import { IonCard, IonContent, IonHeader, IonPage, IonToolbar,IonButton, IonImg } from '@ionic/react';

import ExploreContainer from "../components/ExploreContainer";

  const Home: React.FC = () => {
    const goTo=(path:string) => {}
    return (
      <IonPage>
        <IonHeader>
          {/* <IonToolbar color="Primary">PodBean</IonToolbar> */}
          
        </IonHeader>
        <IonContent fullscreen>
         <div> <IonImg className='image' src='assets/images/506405-arijit 1.jpg'>
          </IonImg></div>
          <div className='text'>
           <div className='welcome'> Welcome to </div>
          <div className='padbean'> PadBean</div>
          <div className='music'>  Music the voice of soul</div>
            </div>
            <div className="line"></div>
       <div>
          <IonButton className='get-started-btn' onClick={ e => goTo('/Signup')}>Get Started</IonButton>
          </div>
          <ExploreContainer />
        </IonContent>
      </IonPage>
    );
  };
  export  default Home;