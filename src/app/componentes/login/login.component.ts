import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../servicios/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private message: NzMessageService, private authService: AuthService, private router: Router) {}

  async changeComponent(data: any) {

    const response = await this.authService.auth(data);

    if (response.response.data.success) {
      if(response.response.data.user.perfil_id === 2){
        this.router.navigate(['/dash']);
      }else if(response.response.data.user.perfil_id === 1){
        this.router.navigate(['/admin-dash']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }
  
  onSubmit() {

    const logData = {
      username: this.username,
      password: this.password
    };

    this.changeComponent(logData);
  }
}
