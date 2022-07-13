import {
  IonContent,
  IonGrid,
  IonRow,
  IonPage,
  IonInput,
  IonLabel,
  IonButton,
  IonImg,
  
  useIonRouter,
  useIonLoading,
  useIonAlert,
  useIonToast,
  // alertOutline
} from "@ionic/react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {UserAuth} from '../context/AuthContext';
import img from "../Images/logo.png";
import { alert } from "ionicons/icons";
const SignUp = () => {
  
  const [present, dismiss] = useIonToast();
  async function handleButtonClick(message) {
    present({
      message: message,
      duration: 2000,
      position: "top",
      color: "light",
      mode: "ios",
      icon: alert,
    });
  }

  const [presentAlert] = useIonAlert();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser, currentUser } = UserAuth();
  const [showPresent,showDismiss] = useIonLoading();

  const router = useIonRouter();
  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "ios",
      color: "light",
    });
  }
  const clearInputs = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  
  const handleSignup = async (e) => {
    var atposition = email.indexOf("@");

    var dotposition = email.lastIndexOf(".");

    if (
    
      email == null ||
      email === "" ||
      password == null ||
      password === ""||
      cpassword==null||
      cpassword===""
    ) {
      handleButtonClick("Fill the required fields");
    } else if (password.length < 6) {
      handleButtonClick("password must be altest 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please Enter Correct Email");
    } else {
      try {
        showPresent({
          message: 'Please wait...',
          duration: 1000,
    
        })
        await createUser(email, password);
       
        handleButtonClick(name + " " + "user successfully signedup");
        clearInputs();
        router.push("/signin");
      } catch (e) {
        setError(e.message);
        showDismiss();
        clearInputs();
        handleAlert(e.message);
      }
    }
  };
  
  return (
    <IonPage>
      <IonContent fullscreen className="ion-content">
        <IonGrid className="signup-grid-in">
          <IonRow className="grid-row1">
            <IonImg src={img} alt=" " className="signup-top-img"></IonImg>
          </IonRow>
          <IonRow className="signup-grid-row2">
            <IonLabel className="signup-text1">Create an account</IonLabel>
          </IonRow>
          <IonRow className="signup-grid-row3">
            <IonInput
              className="email"
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value)}
              placeholder="please enter your email"
            ></IonInput>
          </IonRow>
          <IonRow className="signup-grid-row4">
            {/* <IonLabel className="errorMsg">{emailError}</IonLabel> */}
          </IonRow>
          <IonRow className="signup-grid-row5">
            <IonInput
              className="password"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value)}
              placeholder="please enter password"
            ></IonInput>
          </IonRow>
          <IonRow className="signup-grid-row6">
            {" "}
            {/* <IonLabel className="errorMsg">{PassswordError}</IonLabel> */}
          </IonRow>
          <IonRow className="signup-grid-row7">
            <IonInput
              className="cpassword"
              type="password"
              value={cpassword}
              onIonChange={(e) => setCPassword(e.detail.value)}
              placeholder="confirm password"
            ></IonInput>
          </IonRow>
          <IonRow className="signup-grid-row8">
            <IonButton
              className="signup-btn  ion-text-capitalize"
              onClick={handleSignup}
              fill="solid"
            >
              SignUp
            </IonButton>
          </IonRow>
          <IonRow className="signup-grid-row9">
            <IonLabel>Back to &nbsp;</IonLabel>{" "}
            <Link to="/Signin" className="signin-link" onClick={clearInputs}>
              Sign In
            </Link>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SignUp;
