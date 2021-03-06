import { LivroDeleteComponent } from './components/views/livro/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './components/views/livro/livro-update/livro-update.component';
import { LivroReadAllComponent } from './components/views/livro/livro-read-all/livro-read-all.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { HomeComponent } from './components/views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivroCreateComponent } from './components/views/livro/livro-create/livro-create.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'categorias',
    component: CategoriaReadComponent
  },{
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },{
    path: 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },{
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },{
    path: 'livros',
    component: LivroReadAllComponent
  },{
    path: 'livros/create',
    component: LivroCreateComponent
  },{
    path: 'livros/delete/:id',
    component: LivroDeleteComponent
  },{
    path: 'livros/update/:id',
    component: LivroUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
