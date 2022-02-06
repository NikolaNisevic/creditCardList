import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateCardComponent} from './components/create-card/create-card.component';
import {CreditCardListComponent} from './components/credit-card-list/credit-card-list.component';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {path: 'list', component: CreditCardListComponent},
  {path: 'createCard', canActivate: [AuthGuard], component: CreateCardComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
