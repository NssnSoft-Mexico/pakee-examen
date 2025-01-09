import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTableModule } from 'ng-zorro-antd/table'
import { UserService } from '../servicios/getUser';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-dashboard-admin',
  imports: [NzTabsModule, NzButtonModule, NzTableModule, CommonModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.css'
})

export class DashboardAdminComponent  {
  
  listOfData: any[] = [];
  constructor( private userService: UserService) {}

  async userComponent() {
    try {
      const response = await this.userService.users();
      this.listOfData = response.data;

    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  ngOnInit() {
    this.userComponent();
  };

  openAddUserDialog() {
    console.log('Abriendo formulario para agregar un usuario');
  }

}
