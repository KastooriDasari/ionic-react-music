import { IonCard, IonContent, IonHeader, IonPage, IonToolbar }from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
const questions: React.FC = () => 
{
    return(
        <IonPage>
            <IonContent>
                <IonHeader>
                    <IonToolbar>Questions</IonToolbar>
                </IonHeader>
                <IonCard color='primary'className='width:50%'>

                </IonCard>
            <ExploreContainer />  
            </IonContent>
        </IonPage>
    );
};
export default questions;












// import {
//     IonContent,
//     IonGrid,
//     IonHeader,
//     IonRow,
//     IonCol,
//     IonPage,
//     IonToolbar,
//     IonCard,
//     IonRadio,
    
  
//     IonRadioGroup,
   
//   } from "@ionic/react";
//   import ExploreContainer from "../components/ExploreContainer";
//   const questions: React.FC = () => {
    
//     return (
//       <IonPage>
//         <IonHeader>
//           <IonToolbar color="danger">Quize Application</IonToolbar>
//         </IonHeader>
//         <IonContent fullscreen>
//           <IonCard>
//             <IonGrid>
//               <IonRow> What is an operating system?  {" "}</IonRow>
//               <IonRow>
//               <IonRadioGroup>
//                 <IonRadio></IonRadio><IonCol>interface between the hardware and application programs</IonCol>
//                 <IonRadio> </IonRadio><IonCol> collection of programs that manages hardware resources</IonCol>
//                 <IonRadio></IonRadio> <IonCol> system service provider to the application programs</IonCol>
//                 <IonRadio> </IonRadio><IonCol>all of the mentioned</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
  
//               <IonRow>
           
//                 In Operating Systems, which of the following is/are CPU scheduling
//                 algorithms? {" "}
//               </IonRow>
  
//               <IonRow>
//               <IonRadioGroup>
//                 <IonRadio></IonRadio> <IonCol>Priority</IonCol>
//                 <IonRadio></IonRadio><IonCol>Round Robin</IonCol>
//                 <IonRadio></IonRadio><IonCol>Shortest Job First</IonCol>
//                 <IonRadio></IonRadio> <IonCol> All of the mentioned</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
//               <IonRow>
//                 To access the services of the operating system, the interface is
//                 provided by the ___________{" "}
//               </IonRow>
//               <IonRow>
//               <IonRadioGroup>
//                 <IonRadio></IonRadio><IonCol>Library</IonCol>
//                 <IonRadio> </IonRadio> <IonCol> System calls</IonCol>
//                 <IonRadio></IonRadio><IonCol>Assembly instructions</IonCol>
//                 <IonRadio></IonRadio> <IonCol> API</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
//               <IonRow> CPU scheduling is the basis of ___________    {" "}</IonRow>
//               <IonRow>
//               <IonRadioGroup>
//                 <IonRadio></IonRadio><IonCol>multiprogramming operating systems</IonCol>
//                 <IonRadio></IonRadio><IonCol> larger memory sized systems</IonCol>
//                 <IonRadio> </IonRadio><IonCol>multiprocessor systems</IonCol>
//                 <IonRadio> </IonRadio> <IonCol>none of the mentioned</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
  
//               <IonRow>
               
//                 If a process fails, most operating system write the error
//                 information to a ______ {" "}
//               </IonRow>
//               <IonRow>
//                  <IonRadioGroup>
//                 <IonRadio></IonRadio> <IonCol> new file</IonCol>
//                 <IonRadio> </IonRadio> <IonCol>another running process </IonCol>
//                 <IonRadio></IonRadio> <IonCol> log file</IonCol>
//                 <IonRadio></IonRadio><IonCol> none of the mentioned</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
//               <IonRow>
               
//                 Which one of the following is not a real time operating system? {" "}
//               </IonRow>
//               <IonRow>
//                  <IonRadioGroup>
//                 <IonRadio></IonRadio><IonCol> RTLinux</IonCol>
//                 <IonRadio></IonRadio> <IonCol> Palm OS</IonCol>
//                 <IonRadio></IonRadio> <IonCol>QNX</IonCol>
//                 <IonRadio></IonRadio><IonCol> VxWorks</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
//               <IonRow> What does OS X has? {" "}</IonRow>
//               <IonRow>
//                  <IonRadioGroup>
//                 <IonRadio></IonRadio> <IonCol> monolithic kernel with modules</IonCol>
//                 <IonRadio> </IonRadio> <IonCol> microkernel</IonCol>
//                 <IonRadio></IonRadio><IonCol>monolithic kernel</IonCol>
//                 <IonRadio></IonRadio> <IonCol> hybrid kernel</IonCol>
//                 </IonRadioGroup>
//               </IonRow>
//               <IonRow>
//    Cascading termination refers to the termination of all child
//                 processes if the parent process terminates ______{" "}
//               </IonRow>
//               <IonRow>
//                  <IonRadioGroup>
//               <IonRadio></IonRadio><IonCol>Normally or abnormally</IonCol>
//               <IonRadio></IonRadio><IonCol>Abnormally</IonCol>
//               <IonRadio></IonRadio><IonCol>Normally</IonCol>
//               <IonRadio></IonRadio><IonCol>None of the mentioned</IonCol>
//               </IonRadioGroup>
//               </IonRow>
//               <IonRow>
//                 . When a process is in a “Blocked” state waiting for some I/O
//                 service. When the service is completed, it goes to the __________{" "}
//               </IonRow>
//               <IonRow>
//               <IonRadioGroup>
//               <IonRadio></IonRadio><IonCol>Terminated state</IonCol>
//               <IonRadio></IonRadio><IonCol> Suspended state</IonCol>
//               <IonRadio></IonRadio><IonCol> Running state</IonCol>
//               <IonRadio></IonRadio><IonCol> Ready state</IonCol>
//               </IonRadioGroup>
//               </IonRow>
//               <IonRow>
             
//                 A deadlock avoidance algorithm dynamically examines the __________
//                 to ensure that a circular wait condition can never exist.    {" "}
//               </IonRow>
//               <IonRow>
//                 <IonRadioGroup>
//                 <IonRadio></IonRadio><IonCol>operating system</IonCol>
//               <IonRadio></IonRadio><IonCol> resources</IonCol>
//               <IonRadio></IonRadio><IonCol>system storage state</IonCol>
//               <IonRadio></IonRadio><IonCol>resource allocation state</IonCol>
//                 </IonRadioGroup>
             
//                </IonRow>
               
//             </IonGrid>
//           </IonCard>
         
//           {/* <IonButton href="/Login">Login</IonButton>
//           <IonButton href="/Registration">Registration</IonButton> */}
//           <ExploreContainer />
//         </IonContent>
//       </IonPage>
//     );
//   };
//   export default questions;
  