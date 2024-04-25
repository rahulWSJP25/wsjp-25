// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Table from "./Table";
import Form from "./Form";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeBA1rDGsQoGvkaDJLjonQbq12HZnaEa8",
  authDomain: "wsjp-25-27d67.firebaseapp.com",
  projectId: "wsjp-25-27d67",
  storageBucket: "wsjp-25-27d67.appspot.com",
  messagingSenderId: "853540563645",
  appId: "1:853540563645:web:4b53818ecb40105634e5d4",
  measurementId: "G-TSQY4GMBNZ"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

function App() {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-3">
      <Table />
      <Form />
    </div>
  )
}

export default App;