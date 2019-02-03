import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAsmdS3u-q70bl-p823HbANg5T_urpufQM",
  authDomain: "roadio-posts-review.firebaseapp.com",
  databaseURL: "https://roadio-posts-review.firebaseio.com",
  projectId: "roadio-posts-review",
  storageBucket: "roadio-posts-review.appspot.com",
  messagingSenderId: "525382261981"
};

var fireDB = firebase.initializeApp(config);

export default fireDB;