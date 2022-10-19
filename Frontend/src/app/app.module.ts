import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FeatureEagerModule } from './feature-eager/feature-eager.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureEagerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule
    // ApiModule
  ],
  providers: [
    // { provide: BASE_PATH, useValue: environment.apiRoot }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
