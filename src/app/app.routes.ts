import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { EditformComponent } from './editform/editform.component';

export const routes: Routes = [
    {
        path:"",component:LoginComponent
    },
    {
        path:"register",component:RegisterComponent
    },
    {
        path:"home",component:TableComponent
    },
    { path: 'edit/:id', component: EditformComponent }

];
