import firebase from 'firebase/app';


const devConfig = {
  apiKey: "AIzaSyCxH7UCFPmwHpN_hcD_Hx9OAmRNkwC2NWE",
  authDomain: "reactshare2288.firebaseapp.com",
  databaseURL: "https://reactshare2288.firebaseio.com",
  projectId: "reactshare2288",
  storageBucket: "reactshare2288.appspot.com",
  messagingSenderId: "86672859511",
  appId: "1:86672859511:web:7794ccd8e5d01e5f51c172"
};

//auth
//firestore

const prodConfig ={}

const config = process.env.NODE_ENV === 'development' ? devConfig : 'prodConfig'


class Firebase {
    constructor() {
        firebase.initializeApp(config);
    }
}

export default new Firebase()

//firebase.initializeApp(devConfig)
