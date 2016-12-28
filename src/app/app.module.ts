import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,ValueProvider} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DescriptionComponent } from './description/description.component';
import { RouterModule, Routes } from '@angular/router';
import {routes} from './app.routes';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {ContactService} from './contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DescriptionComponent,
    HeaderComponent,
    ServicesComponent,
    SkillsComponent,
    GallaryComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
