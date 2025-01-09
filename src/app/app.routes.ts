import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './componentes/todo-list/todo-list.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardAdminComponent } from './componentes/dashboard-admin/dashboard-admin.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirigir a login por defecto
    { path: 'login', component: LoginComponent },
    { path: 'dash', component: TodoListComponent, canActivate: [AuthGuard] }, 
    { path: 'admin-dash', component: DashboardAdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }