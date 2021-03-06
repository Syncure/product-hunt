import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

import Router from 'next/router';
import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length){
            app.initializeApp(firebaseConfig)
        } 
        this.auth = app.auth();
        this.db = app.firestore();    
        this.storage = app.storage();
    }

    // Registrar un usuario
    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }

    // Iniciar Sesion
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Cerrar sesion
    async cerrarSesion() {
        await this.auth.signOut();
        Router.push('/login');
    }
}

const firebase = new Firebase();
export default firebase;