import { Subscription } from 'rxjs';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  authenticationForm!: UntypedFormGroup;
  displayStyle = { displayBlock: "none", displayStyle: '' };
  localModal: { status: string, statusText: string, name: string } | any = {};
  localModalSucess: { status: string, statusText: string, name: string } | any = {};
  isSucess: boolean | any = false; /**Recebe um evento que é VOID sem paramentros */
  subs!: Subscription;


  constructor(private fb: UntypedFormBuilder, private authService: AuthService, private router: Router) {
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
            console.log('Response Data in the Auth: ',data)
            // this.localModalSucess.name = 'All Right!!! ';
            // this.localModalSucess['status'] = 'Welcome';
            // this.localModalSucess['statusText'] = 'You are Login';
            // this.displayStyle.displayStyle = 'alert-success';
            this.isSucess = true;
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

  closeModalSucess() {
    this.isSucess = null; // a var tem q resetada para null, para termos o efeito esperado.
    this.router.navigateByUrl('/body');
  }

  openModal() {
    this.isLodingSpinner = false;
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
