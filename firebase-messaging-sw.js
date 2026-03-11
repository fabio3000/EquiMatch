importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDtwsvmYSONjFufhbJ5I8G_RAMffnh7re0",
  projectId: "theplot-app",
  messagingSenderId: "550703275210",
  appId: "1:550703275210:web:81bc0e5a373f87a3c92833"
});

const messaging = firebase.messaging();
// WICHTIG: Hier unten darf NICHTS mehr stehen! 
// Kein showNotification!
