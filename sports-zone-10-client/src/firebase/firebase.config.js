
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCjAfDRiBq1HXUmE-rctDmMtC7o5nRFdT4",
  authDomain: "sports-zone-a10-client.firebaseapp.com",
  projectId: "sports-zone-a10-client",
  storageBucket: "sports-zone-a10-client.firebasestorage.app",
  messagingSenderId: "968957181114",
  appId: "1:968957181114:web:c854c5a8d9f76eed821683"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth