// 파이어베이스 앱 객체 모듈 가져오기
import firebase from 'firebase/compat/app'

// 파이어베이스 DB를 초기화하고 연결
const oFirebase = firebase.initializeApp({
  apiKey: "AIzaSyCGF-bg3Dtibx1yM80qzmAEIQ2c13tfMHk",
  authDomain: "test-project-658b4.firebaseapp.com",
});

// 파이어베이스 DB객체 중에서 todos 항목을 다른 곳에서 사용하도록 공개
export const oFirebaseAuth = oFirebase.auth();