import { Routes, Resolve } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlpComponent } from './plp/plp.component';
import { HomeResolve } from './resolve/homeresolve';
import { ParentComponent } from './parent/parent.component';
import{ ChildOneComponent } from './parent/child-one/child-one.component';
import{ ChildTwoComponent } from './parent/child-two/child-two.component';
import { UdemyHomeComponent } from './udemy/udemy-home/udemy.home.component';
// import { PdpComponent } from './pdp/pdp.component';
// import { CreateRegistryComponent } from './create-registry/create-registry.component';

export const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full' },
    { path:'home',
      component: HomeComponent,
      resolve: {
      resolvedData: HomeResolve
      },
      data: [{
        stateName: 'home'
      }]
    },
    { path:'plp/:id', component: PlpComponent },
    { path:'parent', component: ParentComponent,
      children: [
        { path:'', redirectTo:'childone', pathMatch:'full' },
        {path: 'childone', component: ChildOneComponent },
        {path: 'childtwo', component: ChildTwoComponent }  
      ]
    },
    { path:'udemy', component: UdemyHomeComponent },

    ]