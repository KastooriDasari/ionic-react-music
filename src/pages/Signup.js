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
  useIonAlert,
  useIonToast,
  // alertOutline
} from "@ionic/react";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import {UserAuth} from '../context/AuthContext';
import img from "C:/Users/KastooriDasari/Desktop/sky-music/src/Images/logo-removebg-preview.png";
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

  //  console.log(email);
  // const clearInputs =() =>{
  //     setEmail('');
  //     setPassword('');
  //     setCPassword('');
  //   }
  //   const clearErrors = () => {
  //     setEmailError('');
  //     setPasswordError('');
  //   }
  //   const authlistener = () => {
  //     firebaseApp.auth().onAuthStateChanged(user => {
  //       if (user) {
  //         clearInputs();

  //       }
  //       else {
  //         setEmail("");
  //       }
  //     });
  //   };
  //   useEffect(() => {
  //     authlistener();
  //   }, []);
  //   const handleSignup = () => {
  //     clearErrors();
  //     if (password === cpassword) {
  //     firebaseApp.auth().createUserWithEmailAndPassword(email, password,cpassword).then(()=>{router.push("/dashboard")})
  //     .then(() => {

  //         handleToast("Signedin successfully");

  //       })

  //     .catch((err) => {
  //         switch (err.code) {
  //           case "auth/email-already-in-use":
  //           case "auth/invalid-email":

  //             setEmailError(err.message);
  //             break;
  //           case "auth/weak-password":
  //             setPasswordError(err.message);
  //             break;
  //         }
  //       });
  //     }else{
  //       handleAlert(emailError)
  //     }
  //       clearInputs();
  //   };
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
        await createUser(email, password);
        handleButtonClick(name + " " + "user successfully signedup");
        clearInputs();
        router.push("/signin");
      } catch (e) {
        setError(e.message);
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
            <Link to="/Signin" className="signin-link">
              Sign In
            </Link>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SignUp;
