// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getMessaging, getToken, onMessage } from "firebase/messaging";
// import { updateUserProfile } from "../../store/actions/User";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB2xFRQs9Lm8VrC2_pIrkoNX7Bs5KpmWbc",
//   authDomain: "opto-digi.firebaseapp.com",
//   projectId: "opto-digi",
//   storageBucket: "opto-digi.appspot.com",
//   messagingSenderId: "320261906881",
//   appId: "1:320261906881:web:5609f1d3aeced1a5e40f40",
//   measurementId: "G-2BVXXTHX54",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const messaging = getMessaging(app);

// // const analytics = getAnalytics(app);
// export const fetchToken = (dispatch) => {
//   console.log("fetch Token");
//   return getToken(messaging, {
//     vapidKey:
//       "BCo1B0va5qYOgP_5DLrjn0rJXB4eDkLq-BoLPHp4IOQISt0_fmJ51tYRAoSIObUpbamzzAEQic7THgu81CAjyr0",
//   })
//     .then((currentToken) => {
//       if (currentToken) {
//         console.log("current token for client: ", currentToken);
//         dispatch(
//           updateUserProfile({
//             device_type: "web",
//             fcm_token: currentToken,
//           })
//         );
//         // setTokenFound(true);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log(
//           "No registration token available. Request permission to generate one."
//         );
//         // setTokenFound(false);
//         // shows on the UI that permission is required
//       }
//     })
//     .catch((err) => {
//       console.log("An error occurred while retrieving token. ", err);
//       // catch error while creating client token
//     });
// };

// // Handle incoming messages. Called when:
// // - a message is received while the app has focus
// // - the user clicks on an app notification created by a service worker `messaging.onBackgroundMessage` handler.
// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     console.log("onMessageListener");
//     onMessage(messaging, (payload) => {
//       console.log("onMessageListener inner");
//       resolve(payload);
//       console.log("Listener", payload);
//     });
//   });

// export const onBackgroundListener = () =>
//   new Promise((resolve) => {
//     messaging.onBackgroundMessage(function (payload) {
//       console.log("Received background message ", payload);
//       resolve(payload);
//     });
//   });
