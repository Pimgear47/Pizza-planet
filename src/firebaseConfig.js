import Firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCCASuKC3_XdX18Uh9yRU-pNR4pWoOOk_o",
    authDomain: "pizza-planet-55182.firebaseapp.com",
    databaseURL: "https://pizza-planet-55182.firebaseio.com",
    projectId: "pizza-planet-55182",
    storageBucket: "",
    messagingSenderId: "247598498235",
    appId: "1:247598498235:web:5af69fa1a4c17c5b"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database()
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')