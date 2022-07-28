import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private contactSrvc: ContactService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]), 
      message: new FormControl('', [Validators.required])
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.contactForm.value, null, 2));
    this.contactSrvc.sendEmail(this.f['name'].value,this.f['email'].value,this.f['subject'].value,this.f['message'].value);
    this.contactForm.reset();
    this.submitted = false;
  }

}
