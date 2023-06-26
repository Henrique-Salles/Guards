import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components Pages
import { HomeComponent } from './shared/home/home.component';
import { AccountComponent } from './shared/account/account.component';

//Guards
import { canActiveGuard } from './shared/guards/can-active.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [canActiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
