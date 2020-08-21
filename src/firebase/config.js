import * as firebase from 'firebase/app';
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC000FahokeVrVGYxuyq8dZJ41ZwQTYgkY",
  authDomain: "ecommerce-raect.firebaseapp.com",
  databaseURL: "https://ecommerce-raect.firebaseio.com",
  projectId: "ecommerce-raect",
  storageBucket: "ecommerce-raect.appspot.com",
  messagingSenderId: "908888172803",
  appId: "1:908888172803:web:be674435eebb2fc60ce136"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
