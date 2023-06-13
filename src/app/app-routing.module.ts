import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './pages/admin/admin.component';
import { IsConnectedGuard } from './core/is-connected.guard';
import { IsAdminGuard } from './core/is-admin.guard';

const routes: Routes = [
  {
    path: "home", component: HomeComponent
  },
  {
    path: "dashboard", component: DashboardComponent, canActivate: [IsConnectedGuard]
  },
  {
    path: "admin", component: AdminComponent, canActivate: [IsAdminGuard]
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
