import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'
import { AdminComponent } from './admin/admin.component';
import { AuthGuardService } from './auth-guard.service';
import { UserComponent } from './user/user.component'
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [
  {
     path: '',
     component: HomepageComponent
   },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'box/:id',
    component: ProductDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'profile',
    component: UserComponent,
    canActivate: [AuthGuardService]
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
