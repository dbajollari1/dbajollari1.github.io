import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  sendEmail(fullName:string, emailAddress:string, subject:string) {
    console.log("email sent!")
  }

}
