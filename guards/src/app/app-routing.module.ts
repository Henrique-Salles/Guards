import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components Pages
import { HomeComponent } from './shared/pages/home/home.component';
import { AccountComponent } from './shared/pages/account/account.component';

//Guards
import { canActiveGuard } from './shared/guards/can-active.guard';
import { CanDeactiveGuard } from './shared/guards/can-deactive.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [canActiveGuard],
    canDeactivate: [CanDeactiveGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
