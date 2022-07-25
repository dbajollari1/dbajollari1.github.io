import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    })
  }

  onSubmit(contactForm: FormGroup) {
    console.log(contactForm)
    // this.contact.PostMessage(FormData)
    // .subscribe(response => {
    // location.href = 'https://mailthis.to/confirm'
    // console.log(response)
    // }, error => {
    // console.warn(error.responseText)
    // console.log({ error })
    // })
  }

}
