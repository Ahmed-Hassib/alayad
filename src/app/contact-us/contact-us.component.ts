import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  @Input() lang: string;
  @Input() dir: string;

  contactForm: FormGroup;
  fullname = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  mobile = new FormControl('', [Validators.required, Validators.maxLength(11)]);
  company = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  honeypot: FormControl = new FormControl(''); // we will use this to prevent spam
  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string; // the response message to show to the user
  responseMessageClass: string; // the response message to show to the user

  // transmitting url
  url: string;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.lang = localStorage.getItem('currentLang') || 'en';
    this.dir = this.lang == 'ar' ? 'rtl' : 'ltr';

    this.contactForm = this.fb.group({
      fullname: this.fullname,
      mobile: this.mobile,
      company: this.company,
      email: this.email,
      honeypot: this.honeypot,
    });

    this.responseMessage = '';
    this.responseMessageClass = '';
    this.url =
      'https://script.google.com/macros/s/AKfycbyaBFUfin9oz9Fj5QBCnNoJ27pzrCAy_nyfkNUCM56AXL4qyFv7BTYMJVopwNkqPeuGRQ/exec';
  }

  getFormControls() {
    return this.contactForm.controls;
  }

  // onSubmit function
  onSubmit(contactFormDirective: FormGroupDirective) {
    if (
      this.contactForm.dirty == true &&
      this.contactForm.status == 'VALID' &&
      this.honeypot.value == ''
    ) {
      this.contactForm.disable(); // disable the form if it's valid to disable multiple submissions
      var formData: any = new FormData();
      formData.append('fullname', this.contactForm.value.fullname);
      formData.append('mobile', this.contactForm.value.mobile);
      formData.append('company', this.contactForm.value.company);
      formData.append('email', this.contactForm.value.email);
      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits
      this.http.post(this.url, formData).subscribe(
        (response) => {
          // choose the response message
          if ('result' in response && response['result'] == 'success') {
            this.responseMessage = 'success msg';
            this.responseMessageClass = 'success';
            // reset form
            setTimeout(() => {
              this.resetForm(contactFormDirective);
            }, 2000);
          } else {
            this.responseMessage = 'fail msg';
            this.responseMessageClass = 'danger';
          }
          this.contactForm.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = 'fail msg';
          this.responseMessageClass = 'danger';
          this.contactForm.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    } else {
      this.responseMessage = 'required';
      this.responseMessageClass = 'danger';
      this.contactForm.enable(); // re enable the form after a success
      this.submitted = true; // show the response message
      this.isLoading = false; // re enable the submit button
    }
    setTimeout(() => {
      this.submitted = false;
      this.isLoading = false;
    }, 10000);
  }

  resetForm(contactFormDirective: FormGroupDirective) {
    this.contactForm.reset();
    contactFormDirective.resetForm();
  }
}
