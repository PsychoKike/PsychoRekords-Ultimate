import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DiscosComponent } from './discos/discos.component';
import { PinesComponent } from './pines/pines.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './login/login.component';
import { AltaComponent } from './alta/alta.component';

export const routes: Routes = [
    {path: 'Inicio', component: InicioComponent},
    {path: 'Discos', component: DiscosComponent},
    {path: 'Pines', component: PinesComponent},
    {path: 'SobreNosotros', component: SobreNosotrosComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'Alta', component: AltaComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];
