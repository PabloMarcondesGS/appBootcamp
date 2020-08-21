import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.1.21:3333',
});

export default api;


/**
 * ios com emulador: localhost
 * ios com fisico: ip da maquina
 * android com emulador: localhost (adb reverse  tcp:porta tcp:porta)
 * android com emulador: 10.0.2.2 (Android studio)
 * android com emulador: 10.0.3.2 (Genymotion)
 * android com fisico: IP da máquina
 * 
 */