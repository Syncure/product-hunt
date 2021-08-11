import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase/index';
import useAtenticacion from '../hooks/useAutenticacion';

const MyApp = props => {
  const usuario = useAtenticacion();

  const { Component, pageProps } = props;

  return(
    <FirebaseContext.Provider
      value={{
        firebase,
        usuario
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )

}

export default MyApp;