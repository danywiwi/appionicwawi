import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'userlist',
    loadChildren: () => import('./userlist/userlist.module').then(m => m.UserlistPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'formulariosenfermera',
    loadChildren: () => import('./formulariosenfermera/formulariosenfermera.module').then(m => m.FormulariosenfermeraPageModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./notfound/notfound.module').then(m => m.NotfoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'notfound'  // Asegúrate de que este nombre coincida con la ruta correcta
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
