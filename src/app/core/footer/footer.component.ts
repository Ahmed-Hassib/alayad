import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  contactForm: FormGroup;
  fullname = new FormControl('', Validators.required);
  mobile = new FormControl('', [Validators.required, Validators.maxLength(11)]);
  company = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      fullname: this.fullname,
      mobile: this.mobile,
      company: this.company,
      email: this.email,
      honeypot: this.honeypot,
    });

    this.responseMessage = '';
  }

  getFormControls() {
    return this.contactForm.controls;
  }

  // onSubmit function
  onSubmit() {
    this.submitted = true;
    this.isLoading = false;
    this.responseMessage = 'This form is not work for now';
    // if (
    //   this.contactForm.dirty == true &&
    //   this.contactForm.status == 'VALID' &&
    //   this.honeypot.value == ''
    // ) {
    //   this.contactForm.disable(); // disable the form if it's valid to disable multiple submissions
    //   var formData: any = new FormData();

    //   console.log(this.contactForm.value);
    //   formData.append('fullname', this.contactForm.value.fullname);
    //   formData.append('mobile', this.contactForm.value.mobile);
    //   formData.append('company', this.contactForm.value.company);
    //   formData.append('email', this.contactForm.value.email);
    //   this.isLoading = true; // sending the post request async so it's in progress
    //   this.submitted = false; // hide the response message on multiple submits
    //   this.http
    //     .post(
    //       'https://script.google.com/macros/s/AKfycbxgeEIPFXpEH7tM_ZN8KfNaZ4xYAqyWJ7m-oiP-Z_YRnqe-C4oNUjOr9oZTEDv5nSIG/exec',
    //       formData
    //     )
    //     .subscribe(
    //       (response) => {
    //         // choose the response message
    //         if ('result' in response && response['result'] == 'success') {
    //           this.responseMessage =
    //             "Thanks for the message! I'll get back to you soon!";
    //         } else {
    //           this.responseMessage =
    //             'Oops! Something went wrong... Reload the page and try again.';
    //         }
    //         this.contactForm.enable(); // re enable the form after a success
    //         this.submitted = true; // show the response message
    //         this.isLoading = false; // re enable the submit button
    //         console.log(response);
    //       },
    //       (error) => {
    //         this.responseMessage =
    //           'Oops! An error occurred... Reload the page and try again.';
    //         this.contactForm.enable(); // re enable the form after a success
    //         this.submitted = true; // show the response message
    //         this.isLoading = false; // re enable the submit button
    //         console.log(error);
    //       }
    //     );
    // }
  }
}
