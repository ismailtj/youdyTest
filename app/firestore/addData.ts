import firebase_app from "@/configs/firebase";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { uid } from "uid";

const db = getFirestore(firebase_app);
export default async function addData(
  colllection: string,
  data: { email: string; msg: string }
) {
  let result = null;
  let error = null;

  try {
    result = await setDoc(doc(db, colllection, uid(25)), data, {
      merge: true,
    });
  } catch (e) {
    error = e;
    console.log(error);
  }

  return { result, error };
}
