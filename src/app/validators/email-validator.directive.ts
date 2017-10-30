import { Directive } from '@angular/core'; //  Will import the angular core features. Required for all components , modules, etc...
import { NG_VALIDATORS, FormControl, Validator, ValidationErrors } from '@angular/forms'; // Will import the angular forms

@Directive({
 selector: '[email-validate]',
 providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator { // Creating class implementing Validator interface

 validate(c: FormControl): ValidationErrors { 
   const email = c.value;
   var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
   const isValid = reg.test(email);
   const message = {
     'email': {
       'message': 'Should be vaild email' // Will changes the error defined in errors helper.
     }
   };
   return isValid ? null : message;
 }
}
