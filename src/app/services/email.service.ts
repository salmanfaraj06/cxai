import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceID = environment.emailServiceID;
  private templateID = environment.emailTemplateID;
  private userID = environment.emailUserID;

  constructor() {}

  sendEmail(formData: any): Promise<EmailJSResponseStatus> {
    return emailjs.send(this.serviceID, this.templateID, formData, this.userID);
  }
}