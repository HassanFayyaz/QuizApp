import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainQuestionsComponent } from './Component/main-questions/main-questions.component';
import { ProgressBarComponent } from './Component/progress-bar/progress-bar.component';
import { ResultProbabilityBarComponent } from './Component/result-probability-bar/result-probability-bar.component';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NzButtonModule } from 'ng-zorro-antd/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NzProgressModule } from 'ng-zorro-antd/progress';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MainQuestionsComponent,
    ProgressBarComponent,
    ResultProbabilityBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    MatProgressBarModule,
    NzProgressModule

    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
