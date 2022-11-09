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
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/collection/article/create/create.module').then(m => m.CreatePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/collection/article/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/collection/article/update/update.module').then(m => m.UpdatePageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./pages/collection/article/article.module').then(m => m.ArticlePageModule)
  },
  {
    path: 'administrator',
    loadChildren: () => import('./pages/collection/administrator/administrator.module').then(m => m.AdministratorPageModule)
  },
  {
    path: 'shoes',
    loadChildren: () => import('./pages/collection/shoes/shoes.module').then(m => m.ShoesPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./pages/collection/accessories/accessories.module').then(m => m.AccessoriesPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./pages/collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'clothing',
    loadChildren: () => import('./pages/collection/clothing/clothing.module').then( m => m.ClothingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }