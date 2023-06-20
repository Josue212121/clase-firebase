
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-Firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyBDja6-iRutvgbY644XifiH0LNU7Us0Yww",
    authDomain: "prueba-de-proyecto-d4e94.firebaseapp.com",
    projectId: "prueba-de-proyecto-d4e94",
    storageBucket: "prueba-de-proyecto-d4e94.appspot.com",
    messagingSenderId: "197167449614",
    appId: "1:197167449614:web:7b50c46050ae19cbb49e5f",
}

const app = initializeApp(firebaseConfig);

const db = Firestore (app);
async function getUser(db) {

  const user = collection(db, "test 1");
  const result = await getDoc(user);
  console.log(result)
  const dataResult = result.docs.map (doc => doc.data())
  return dataResult
}

try {
    getUser (db).then((user) => console.log (user));
   getUser (db)
 }catch (error) {
      console.error(error)
   }