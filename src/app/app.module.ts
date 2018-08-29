import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from 'src/app/report/report.component';
import { ToolComponent } from 'src/app/tool/tool.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'report' , component: ReportComponent},
  { path: 'tool' , component: ToolComponent },
  { path: 'contact' , component: ContactComponent },
  ];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ContactComponent,
    ToolComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    RouterModule.forRoot (routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
