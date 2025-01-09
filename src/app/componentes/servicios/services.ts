import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
  })

  export class AuthService {
  
    async auth(data: any): Promise<any> {
      try {
        const response = await axios.post('http://localhost:3000/auth/login', data);
  
        if (response.data.success) {

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("perfil", response.data.user.perfil_id);
  
          const fechaActual = new Date();
          const options = { timeZone: 'America/Mexico_City', hour12: false };
  
          const fechaMexico = new Intl.DateTimeFormat('es-MX', {
            ...options,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }).format(fechaActual);

          const logData = {
            idPerfil: response.data.user.perfil_id,
            fecha: fechaMexico
          };
          
          // Llamar a la función para registrar la bitácora
          await this.regBitacora(logData);
  
          return { response };
        } else {
          return { success: false };
        }
      } catch (error) {
        console.error('Error de autenticación:', error);
        return { success: false, error };
      }
    }
  
    async regBitacora(logData: any): Promise<void> {
      // Aquí podrías registrar la bitácora
      await axios.post('http://localhost:3000/auth/bitacora', logData);
    }
  }