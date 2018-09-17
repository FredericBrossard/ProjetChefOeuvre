import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReportComponent } from 'src/app/report/report.component';
import { ToolComponent } from './tool/tool.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LineComponent } from 'src/app/line/line.component';
import { ListreportComponent } from 'src/app/listreport/listreport.component';
import { ConsultreportComponent } from './consultreport/consultreport.component';
import { EditreportComponent } from './editreport/editreport.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'home' , component: HomeComponent },
  { path: 'report' , component: ReportComponent},
  { path: 'tool' , component: ToolComponent },
  { path: 'line' , component: LineComponent },
  { path: 'contact' , component: ContactComponent },
  { path: 'listreport' , component: ListreportComponent },
  { path: 'consultreport/:id' , component: ConsultreportComponent },
  { path: 'editreport/:id' , component:  EditreportComponent }

  ];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    ContactComponent,
    ToolComponent,
    LineComponent,
    ReportComponent,
    ListreportComponent,
    ConsultreportComponent,
    EditreportComponent
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
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    RouterModule.forRoot (routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
