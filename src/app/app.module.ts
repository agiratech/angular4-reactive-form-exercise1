import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ErrorsComponent } from './errors.component';

import { AgeValidatorDirective } from './validators/age-validator.directive';
import { EmailValidatorDirective } from './validators/email-validator.directive';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  declarations: [AppComponent, ErrorsComponent,
    AgeValidatorDirective,EmailValidatorDirective],
  bootstrap: [AppComponent]
})
export class AppModule {
}
