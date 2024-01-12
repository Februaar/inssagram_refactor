import { app, db, storage } from "../../firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export const uploadImage = async (memberId: string, file: any) => {
  const storageRef = ref(storage, `user/${memberId}/images/${file.name}`);
  await uploadBytes(storageRef, file);

  // 업로드 후 이미지의 다운로드 URL 얻기
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};

export const uploadImgUrl = async (imageUrl: any) => {
  try {
    // 이미지 URL을 Firestore의 'images' 컬렉션에 추가
    await addDoc(collection(db, "user"), {
      image: imageUrl,
      // timestamp: new Data(),
    });

    console.log("Image URL added to DB:", imageUrl);
  } catch (error) {
    console.error("Error adding image URL to DB:", error);
  }
};
