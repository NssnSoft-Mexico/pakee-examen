import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    async users(): Promise<any> {
        
        try {
            const response = await axios.get('http://localhost:3000/settings/users');
            
            if(response.data.success) {
    
                const users = response.data.user;
                return { success: true, data: users };
    
            } else {
                
                return { success: false, message: 'No se pudieron obtener los usuarios.' };
    
            }
        } catch (error) {
            //console.error('Error en la petición:', error.response ? error.response.data : error.message);
            return { success: false };
        }
    };
}