import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC1HKPHlhdW-i3K7BBN8kzg_CAzb-jX414",
    authDomain: "tube-nation.firebaseapp.com",
    projectId: "tube-nation",
    storageBucket: "tube-nation.appspot.com",
    messagingSenderId: "996992538674",
    appId: "1:996992538674:web:dbdc1bfa84b7164e10c42b"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()