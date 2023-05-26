import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAuthApiToken } from 'src/app/_share/Interfaces/iAuthRestApi';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLodingSpinner = false;
  authenticationForm!: FormGroup;
  displayStyle = { displayBlock: "none", displayStyle: '' };
  localModal: { status: string, statusText: string, name: string } | any = {};


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.authenticationForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]],
    })
  }

  ngOnInit(): void {
  }

  changeRouter(){
    this.router.navigateByUrl('/body');
  }

  onSubmit() {


      this.isLodingSpinner = true;
      this.authService.signInUser(this.authenticationForm.get('email')?.value, this.authenticationForm.get('password')?.value).subscribe(
        {
          next: (data: IAuthApiToken) => {
            this.isLodingSpinner = false;
          //  console.log('Response Data: ',data)
            this.localModal.name = 'All Right!!! ';
            this.localModal['status'] = 'Welcome';
            this.localModal['statusText'] = 'You are Login';
            this.displayStyle.displayStyle = 'alert-success';
            this.openModal();
             this.router.navigateByUrl('/body');


          },
          error: (e: any) => {
            this.isLodingSpinner = false;
           //o erro vem pelo Subscribe
           // console.log('error do e: ', e);
            this.localModal.name = 'Ops... Some thing Wrong :';
            this.localModal['status'] = e + '401'
            this.displayStyle.displayStyle = 'alert-danger';
            this.openModal();

          },
          complete: () => { console.info("fim do Observable") },
        }
      );



  }

  openModal() {
    this.displayStyle.displayBlock = "block";
    this.authenticationForm.reset();

  }
  closeModal() {
    this.displayStyle.displayBlock = "none";
    this.displayStyle.displayStyle = "";
    this.authenticationForm.reset()
  }

  errorFireBaseSignUp(error: string) {
    switch (error) {
      case 'EMAIL_EXISTS':
       this.localModal.statusText = 'The email address is already in use by another account.';
        break;
      case 'OPERATION_NOT_ALLOWED':
       this.localModal.statusText = 'Password sign-in is disabled for this project.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
       this.localModal.statusText = 'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;

      default:
        this.localModal.statusText = 'An unkown error occurred!. ';
        break;
    }

   }


}
