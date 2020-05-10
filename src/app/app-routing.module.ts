import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddfilesComponent } from './addfiles/addfiles.component';
import { SyncfilesComponent } from './syncfiles/syncfiles.component';


const routes: Routes = [
    {path: 'add-files', component: AddfilesComponent},
    {path: 'sync', component: SyncfilesComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
