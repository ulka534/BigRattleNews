import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RecommendedComponent } from './pages/recommended/recommended.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonServiceService } from './services/common-service.service';
import { NavigationBarComponent } from './pages/navigation-bar/navigation-bar.component';
import { SourcesComponent } from './pages/sources/sources.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecommendedComponent,
    NavigationBarComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CommonServiceService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
