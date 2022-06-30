import { IonContent, IonGrid, IonHeader,IonRow,IonCol, IonInput, IonPage, IonToolbar, IonButton, IonCard, IonLabel, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import React, {useState}from 'react';

import {personCircle}from 'ionicons/icons';

const Login: React.FC = ({history}:any) => {
    const goTo=(path:string) => {
        if(loginUser()){
            history.push(path);
        }
        else
        {
            console.log('invalid input')
        }
    }
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    
    let UserName='Kastoori';
    let PassWord='123456*';
    const  loginUser = () =>{
        console.log(username ,password)
        if(username===UserName&&password===PassWord){
            return true;
        }
        else{
            return false;
        }
    }
  return (
    <IonPage>
      <IonHeader>
        
        <IonToolbar color="primary">Quize Application</IonToolbar>
     
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonCard className='ion-text-center ion-margin'  >
          <IonLabel>Login</IonLabel><br></br>
          <IonIcon style={{fontSize:"70px" ,color:"#0040ff" }}
                  icon={personCircle}/> 
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonInput placeholder='user name' 
              onIonChange={(e:any)=> setUsername(e.target.value)} ></IonInput>
              <IonInput placeholder='password' type='password'
              onIonChange={(e:any)=> setPassword(e.target.value)} ></IonInput>
              <IonButton onClick={ e => goTo('/home')} >Login</IonButton>
              <IonButton routerLink='/questions' >Back</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        </IonCard>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Login;
