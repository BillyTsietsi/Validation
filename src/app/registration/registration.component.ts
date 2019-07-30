import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,Validator,FormControl,FormGroup,NgForm, FormGroupDirective,FormGroupName ,ValidatorFn} from '@angular/forms';
import {AbstractControl} from '@angular/forms';
import { group } from '@angular/animations';
@Component({


  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'Validation';
  ValidateForm

  V_email:string='';
  V_password:string='';
  V_confirmPassword:string='';
  nameButton = false
  emailPattern:string="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";


  
  constructor(public formBuilder:FormBuilder) {
    

    this.ValidateForm= formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),

      password:['', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$') //this is for the letters (both uppercase and lowercase) and numbers validation
      ])],
 

      
   })
     

  
      const confirmPasswordControl = new FormControl('', {
        validators: sameValueAs(this.ValidateForm,'password')
  
      });
      this.ValidateForm.addControl('confirm_password',confirmPasswordControl);
  
      function sameValueAs(group:FormGroup,controlName:string): ValidatorFn {
        return (control:FormControl) => {
          const myValue = control.value;
          const compareValue = group.controls[controlName].value;
          return (myValue ===compareValue) ? null : {valueDifferentFrom:controlName};
        }
      }
    

   
  }

  
    Error_messages = {
     
      'email': [
        { type: 'required', message: 'Email is required' },
        { type: 'pattern', message: 'Enter a valid email' }
      ],
      'password': [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 8 characters long' },
        { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
      ],
      
      'confirm_password': [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'areEqual', message: 'Password mismatch' }
      ],

    
      }

  ngOnInit() {
  }

}
