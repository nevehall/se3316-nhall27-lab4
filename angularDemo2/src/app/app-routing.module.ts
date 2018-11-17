import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [];

export const AppRoutes: Routes = [
    { path: '', component: LoginComponent }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
