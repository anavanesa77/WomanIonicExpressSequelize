import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionPage } from './collection.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionPage
  },
  {
    path: 'clothing',
    loadChildren: () => import('./clothing/clothing.module').then( m => m.ClothingPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionPageRoutingModule {}
