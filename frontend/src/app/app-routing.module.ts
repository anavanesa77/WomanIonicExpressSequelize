import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'create',
    loadChildren: () => import('./article/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./article/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticlePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }