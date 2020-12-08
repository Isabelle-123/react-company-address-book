import * as firebase from 'firebase';
import "firebase/database";

const config = {
    apiKey: "AIzaSyDndRmtG2tFEGseMiM46V1y141tQvT5pKw",
    authDomain: "company-book-f2457.firebaseapp.com",
    databaseURL: "https://company-book-f2457.firebaseio.com",
    projectId: "company-book-f2457",
    storageBucket: "company-book-f2457.appspot.com",
    messagingSenderId: "99789947360",
    appId: "1:99789947360:web:bae52983cdf1ccda9beb85",
    measurementId: "G-L0HDW23HXY"
};

firebase.initializeApp(config);

export default firebase.database();
