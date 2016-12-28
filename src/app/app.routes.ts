import { Router,RouterModule,Routes  } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DescriptionComponent} from './description/description.component';
import {ServicesComponent} from './services/services.component';
import { SkillsComponent} from './skills/skills.component';
import {ContactComponent} from './contact/contact.component';
import {GallaryComponent} from './gallary/gallary.component';
export const routes:Routes=[
{path:'',redirectTo:"/home", pathMatch:"full"},
{path :"home", component:HomeComponent},
{path :"details", component:DescriptionComponent},
{path:"services", component:ServicesComponent},
{path :"skill", component:SkillsComponent},
{path :"gallary", component:GallaryComponent},
{path :"contact", component:ContactComponent}
];
