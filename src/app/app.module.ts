import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { SectionHomeComponent } from './section-home/section-home.component';
import { FeaturedSectionComponent } from './featured-section/featured-section.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';
import { BestServicesSectionComponent } from './best-services-section/best-services-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SectionHomeComponent,
    FeaturedSectionComponent,
    NewsComponent,
    BestServicesSectionComponent,
    ContactSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
