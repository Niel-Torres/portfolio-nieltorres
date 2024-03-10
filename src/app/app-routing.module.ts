import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./pages/projects/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'sobre-mi',
    loadChildren: () => import('./pages/about-me/about-me.module').then( m => m.AboutMePageModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contact/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: '**',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
