  import firebase from 'firebase';

  try {
    var config = {
      apiKey: "AIzaSyAeUBOZ8TWtOYDtl7XiJVdk2pZj0ltNdwM",
      authDomain: "react-todo-app-a0636.firebaseapp.com",
      databaseURL: "https://react-todo-app-a0636.firebaseio.com",
      storageBucket: "react-todo-app-a0636.appspot.com",
      messagingSenderId: "368799527983"
    };
    firebase.initializeApp(config);
  } catch (e) {

  }

  export var firebaseRef = firebase.database().ref();
  export default firebase;
