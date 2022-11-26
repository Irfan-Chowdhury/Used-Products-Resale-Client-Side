<div align='center'>

# E-Recycle-Phone
</div>

## `Features & Functionalities`
- Firebase Authentication
- Google Login
- Product create, edit, delete


## `PACKAGES SETUP`
#### 1. Create [React](https://reactjs.org/) App
```bash
npx create-react-app your-project-name
```

#### 2. [React Router](https://reactrouter.com/en/main)
```bash
npm install react-router-dom
```
#### 3. [Firebase](https://console.firebase.google.com/) Setup
```bash
npm install firebase
```
and then create file `src/firebase/firebase.config.js` and copy-paste code

```bash
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
```
create `.env.local` file in your application and collect credentials from firebase and then set these in the env file

#### 4. [React-Bootstrap](https://react-bootstrap.github.io/)
  ```bash
  npm install react-bootstrap bootstrap
  ```
  and then goto `src/index.js` and paste the bellow code.
  ```bash
  import 'bootstrap/dist/css/bootstrap.min.css';
  import 'bootstrap/dist/js/bootstrap.min.js';
  ```

#### 5. [React-Icon](https://react-icons.github.io/react-icons/)
  ```bash
  npm install react-icons --save
  ```

#### 6. [React-Toastify](https://www.npmjs.com/package/react-toastify)
  ```bash
  npm install --save react-toastify
  ```
#### 7. [React-Toastify](https://react-hot-toast.com/)
  ```bash
  npm install react-hot-toast
  ```
#### 8. [Tanstack Query](https://tanstack.com/)
```bash
npm i @tanstack/react-query
```
#### 8. [React Hook Form](https://react-hook-form.com/)
```bash
npm install react-hook-form
```

#### 9. Third party image hosting server [Imgbb](https://imgbb.com/)

<br>


## `Hosting Procedure in Firebase`
#### 1. Goto https://console.firebase.google.com/ and chose you project and click there. After then, goto `Build > Hosting`

<img alt="Coding" height="250px" width="120px"  src="https://snipboard.io/kvcj7U.jpg"/>

#### 2. Then Click `Get Started`

<img alt="Coding" src="https://snipboard.io/j93oL5.jpg"/>

#### 3. If are not first time then you can skip 1 & 2(firebase login). Only follow 
```bash
firebase init
```

<img alt="Coding" src="https://snipboard.io/loRr1Q.jpg"/>
<br>

- then A question will be apear that ***Are you ready to proceed?*** then type `y`

<img alt="Coding" height="20px"  src="https://snipboard.io/skXvZz.jpg"/>

- Another Question just arraow down and select option by press **SPACE BAR** `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys` 

<img alt="Coding" src="https://snipboard.io/5heC4H.jpg"/>

- Please select an option: `Use an existing project` and press `ENTER` 

<img alt="Coding" src="https://snipboard.io/5heC4H.jpg"/>

- Select a default Firebase project for this directory:
<img alt="Coding" src="https://snipboard.io/EJTdH3.jpg"/>

- ***What do you want to use as your public directory? (public)*** :type `build`
<img alt="Coding" src="https://snipboard.io/eKMdbJ.jpg"/>

- ***Configure as a single-page app (rewrite all urls to /index.html)?*** :type `y`
<img alt="Coding" src="https://snipboard.io/EtHBrK.jpg"/>

- ***Set up automatic builds and deploys with GitHub? (y/N)*** :type `n`
<img alt="Coding" src="https://snipboard.io/VUEPal.jpg"/>


#### 3. Then run build (each time )
```bash
npm run build
```

#### 4. Deploye in firebase (each time )
```bash
firebase deploy
```

#### 5. The you will get a Hosting URL: https://xyz.web.app

