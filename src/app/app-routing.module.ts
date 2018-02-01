import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { BtcComponent } from './btc/btc.component'
import { AboutComponent } from './about/about.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'btc',
    pathMatch: 'full'
  },
  {
    path: 'btc',
    component: BtcComponent
    // children: []
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
