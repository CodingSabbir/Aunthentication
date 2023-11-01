
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCWZa0-MwFHKuSPRyH3PLfle63Rsl6cXb0",
  authDomain: "panda-drink.firebaseapp.com",
  projectId: "panda-drink",
  storageBucket: "panda-drink.appspot.com",
  messagingSenderId: "380005080000",
  appId: "1:380005080000:web:1ec40d06c401b839524625"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth