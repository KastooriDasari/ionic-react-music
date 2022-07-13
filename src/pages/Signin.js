import {
  IonContent,
  IonPage,
  IonRow,
  IonIcon,
  IonInput,
  IonButton,
  IonLabel,
  useIonRouter,
  IonGrid,
  IonImg,
  IonCol,
  useIonLoading,
  useIonAlert,
  useIonToast,
 
} from "@ionic/react";
import "./Signin.css";
import { UserAuth } from "../context/AuthContext";
import img from "../Images/logo.png";
import { logoFacebook, logoGoogle, logoTwitter } from "ionicons/icons";
import {  useState } from "react";

import { alert } from "ionicons/icons";
import { Link } from "react-router-dom";
const SignIn = () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const [present, dismiss] = useIonToast();

//   let router = useIonRouter();

 
//   const handleToast = async (err) => {
//   present({
//     duration: 1000,
//     message:err ,
//     color: "light",
//     translucent: false,
//       showCloseButton: true,
//   })

// };
//   const clearInputs = () => {
//     setEmail("");
//     setPassword("");
//   };
//   const clearErrors = () => {
//     setEmailError("");
//     setPasswordError("");
//   };
//   const authlistener = () => {
//     firebaseApp.auth().onAuthStateChanged((user) => {
//       if (user) {
//         clearInputs();
//         setUser(user);
//       } 
//       else if(
//         user == null ||
//       user === "" ||
//       email == null ||
//       email === "" ||
//       password == null ||
//       password === ""
//       )
//       {
//         handleToast("email and password should not be empty")
//       }
//       else {
//         setUser("");
//       }
//     });
//   };
//   useEffect(() => {
//     authlistener();
//   }, []);

//   const handleSignin = () => {
//     clearErrors();

//     firebaseApp
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(() => {
//         handleToast("signedin successfully");
//         router.push("/dashboard");
        
//       })

//       .catch((err) => {
//         // handleToast(emailError)
//         switch (err.code) {
//           case "auth/invalid-email":
//           case "auth/user-disabled":
//           case "auth/user-not-found":
//             // setEmailError(err.message);
//             handleToast(err);
//             break;
//           case "auth/wrong-password":
//             // setPasswordError(err.message);
//             handleToast(err);
//             break;
           
//         } 
//       }, 
       
//       );
//       clearInputs(); 
//   };
  // const handleSignout=() =>{
  //   firebaseApp.auth().signOut().then(()=>{router.push('/home');
  // }).then(()=>{
  //   handleToast("signout successfully");
  // });
  // };
 
  const { signIn, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [present, dismiss] = useIonToast();
  const [presentAlert] = useIonAlert();
 const [showPresent,showDismiss] = useIonLoading();
 

  async function handleButtonClick(message) {
    present({
      message: message,
      duration: 5000,
      position: "top",
      color: "light",
      mode: "ios",
      icon: alert,
    });
  }
  async function handleAlert(message) {
    presentAlert({
      header: "Alert",
      message: message,
      buttons: ["OK"],
      mode: "md",
      animated: true,
      cssClass: "loginpage-alert",
      color: "light",
    });
  }
  const router = useIonRouter();
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const handleSignin = async (e) => {
   
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
   
    
   
    if (email == null || email === "" || password == null || password === "") {
      handleButtonClick("Fill the required fields");
    } else if (password.length < 6) {
      handleButtonClick("Password must be of 6 characters");
    } else if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= email.length
    ) {
      handleButtonClick("Please enter correct email");
    } else {
      try {
        showPresent({
          message: 'Please wait...',
          duration: 1000,
    
        })
        await signIn(email, password);
      
        handleButtonClick("Login successful");
        clearInputs();
       
        router.push("/dashboard");
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
        <IonGrid className="content-grid-in">
          <IonRow>
            <IonImg src={img} alt=" " className="signin-top-img"></IonImg>
          </IonRow>
          <IonRow className="content-grid-row1">
            {" "}
            <IonLabel className="text1">Welcome Back! </IonLabel>
          </IonRow>
          <IonRow className="content-grid-row2">
            {" "}
            <IonLabel className="text2"> Sign In </IonLabel>
          </IonRow>
          <IonRow className="content-grid-row3">
            <IonInput
              className="email"
              type="text"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value)}
              placeholder="please enter your email"
            ></IonInput>
          </IonRow>
        
          <IonRow className="content-grid-row4">
            <IonInput
              className="password"
              type="password"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value)}
              placeholder="please enter your password"
            ></IonInput>
          </IonRow>
        
          <IonRow className="content-grid-row5">
            <IonCol >
            <IonButton
              className="signin-btn ion-text-capitalize" 
              onClick={handleSignin }
            >
              SignIn
            </IonButton>
           
            </IonCol>
            {/* <IonCol size="md">
            <IonButton  
            className="signout-btn ion-text-capitalize"
            onClick={handleSignout}
          >
            SignOut
            </IonButton>
            </IonCol> */}
            </IonRow>
          <IonRow className="text">
            <IonLabel className="text3">
              Don't have account ?{" "}
              <Link to="/signup" className="link" onClick={clearInputs}>
                Sign Up
              </Link>{" "}
            </IonLabel>
          </IonRow>
         
          <IonRow className="icons">
            <IonIcon
           
              style={{ fontSize: "30px", color: "orange" }}
              icon={logoFacebook} 
            />
            &emsp;
            <IonIcon
           
              style={{ fontSize: "30px", color: "orange" }}
              icon={logoGoogle}
            />
            &emsp;
            <IonIcon
              
              style={{ fontSize: "30px", color: "orange" }}
              icon={logoTwitter}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default SignIn;
