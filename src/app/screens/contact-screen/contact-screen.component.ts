import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Email} from '../../_models/email';
import {EmailService} from '../../_services/email.service';

@Component({
  selector: 'app-contact-screen',
  templateUrl: './contact-screen.component.html',
  styleUrls: ['./contact-screen.component.css']
})
export class ContactScreenComponent implements OnInit {
  public budgetOptions = ['$250 - $500', '$500 - $1000', '$1000 - $1500', '$1500+'];
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.form = fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      budget: ['', Validators.required],
      additionalDetails: ['']
    });
  }

  ngOnInit() {
  }

  public submit() {
    const email = new Email();
    const values = this.form.value;
    email.name = values.name;
    email.budget = values.budget;
    email.date = values.date;
    email.email = values.email;
    email.location = values.location;
    email.phone = values.phone;
    email.additionalDetails = values.additionalDetails;
    console.log(JSON.stringify(email));
    console.log(this.form);
    this.emailService.sendEmail(email).subscribe(data => {
      if (data) {
        console.log('Success!');
        this.form.reset();
      }
    });
  }

  public getControl(name) {
    return this.form.get(name);
  }

  public log() {
    console.log(this.getControl('email'));
  }
}
