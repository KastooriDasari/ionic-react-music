import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonCol,
  IonInput,
  IonButton,
  IonLabel,
  IonTabButton,
  IonTabBar,
  useIonRouter,
  IonGrid,
  IonImg,
  IonSearchbar,
  IonCard,
  IonTabs,
} from "@ionic/react";

// import img from "../Images/download (1).jpg"
import { home,albumsOutline,heart,personAddOutline} from 'ionicons/icons';
// import img2 from "../Images/logo-removebg-preview.png";

import "./Dashboard.css";
const Dashboard = () => {
    // let router = useIonRouter();
    // const handleToast = async (err) => {
    //     const toast = await toastController.create({
    //       color: "light",
    //       position: "bottom",
    //       duration: 1000,
    //       message: err,
    //       translucent: false,
    //       showCloseButton: true,
    //     });
    
    //     await toast.present();
    
    //   };
    // const handleSignout=() =>{
    //     firebaseApp.auth().signOut().then(()=>{router.push('/home');
    //   }).then(()=>{
    //     handleToast("signout successfully");
    //   });
    //   };
  return (
    <IonPage>
      <IonContent className="ion-content">
        <IonGrid className="content-grid">
          <IonRow>
            {/* <IonCol><IonIcon className="arrowBackOutline " icon={arrowBackOutline} routerLink="./Signin"></IonIcon></IonCol> */}
            <IonCol >
              <IonSearchbar></IonSearchbar>
            </IonCol>
            {/* <IonCol size="md"> */}
              {/* <IonImg src={img} alt=" " className="top-img"></IonImg> */}
            {/* </IonCol> */}
          </IonRow>
          <IonRow className="dashboard-row1">
            <IonCol>All</IonCol>
            <IonCol>Artist</IonCol>
            <IonCol>Albums</IonCol>
          </IonRow>
          <IonRow className="dashboard-text">Recently Played</IonRow>
          <IonRow>
            <IonCol className="dashboard-cards">
              <IonCard className="cards"></IonCard>
            </IonCol>
            {/* <IonCol className="dashboard-cards">
              <IonCard className="cards"></IonCard>
            </IonCol>
            <IonCol className="dashboard-cards">
              <IonCard className="cards"></IonCard>
            </IonCol>
            <IonCol className="dashboard-cards">
              <IonCard className="cards"></IonCard>
            </IonCol> */}
          </IonRow>
          <IonRow>
          <IonButton  
            className="signout-btn ion-text-capitalize"
           routerLink="/home"
          >
            SignOut
            </IonButton>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonTabBar slot="bottom" className="tabbar-bottom">
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon  style={{ color: "orange"}} icon={home}/>

          <IonLabel>Home</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon style={{ color: "orange"}} icon={albumsOutline}/>
          <IonLabel>Library</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon style={{ color: "orange"}} icon={heart} />
          <IonLabel>Favourites</IonLabel>
        </IonTabButton>

        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon style={{ color: "orange"}} icon={personAddOutline}/>

          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};
export default Dashboard;
