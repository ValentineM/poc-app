import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA9th3uXn3LIyhyY7o8kYPYgBXLxiIf0FU",
  authDomain: "rooted-2e41e.firebaseapp.com",
  databaseURL: "https://rooted-2e41e.firebaseio.com",
  projectId: "rooted-2e41e",
  storageBucket: "rooted-2e41e.appspot.com",
  messagingSenderId: "626123361014",
  appId: "1:626123361014:web:23edaae485e987dfadbad7"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };