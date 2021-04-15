import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {validateZip} from '../shared/zip.validator';
@Component({
	selector: 'logon-form',
	template:  `<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<p *ngIf="userName.invalid">Name is invalid.</p>
				<input formControlName="userName" placeholder="User name">
				<input formControlName="password" placeholder="Password">
				<fieldset formGroupName="contact">
					<input formControlName="phone">
					<input formControlName="email">
				</fieldset>
				<button type="submit">Submit</button>
				</form>`
})

export class MyForm {
	myForm:FormGroup;

	constructor(private fb: FormBuilder) {}
	ngOnInit() {
		this. myForm = this.fb.group({
			name: ['', Validators.required],
			password: ['', Validators.minLength(6)],
			city: ['', Validators.maxLength(10)],
			phone: ['', Validators.pattern('[^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$')]
			zip: ['', validateZip]
		});
	}
}

import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'logon-form',
	template:  `<form [formGroup]="form">
			<div formGroupName="name">
				<input formControlName="first" placeholder="First">
				<input formControlName="last" placeholder="Last">
			</div>
			<input formControlName="email" placeholder="Email">
			<button>Submit</button>
			</form>
			<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<p *ngIf="userName.invalid">Name is invalid.</p>
				<input formControlName="userName" placeholder="User name">
				<input formControlName="password" placeholder="Password">
				<fieldset formGroupName="contact">
					<input formControlName="phone">
					<input formControlName="email">
				</fieldset>
				<button type="submit">Submit</button>
			</form>
			<p>Value: {{ form.value | json }}</p>
			<p>Validation status: {{ form.status }}</p>`
	})

export class LogonFormComponent {
	form: FormGroup;

	constructor(@Inject(FormBuilder) fb: FormBuilder) {
		this.form = fb.group({
			userName: ['', Validators.minLength(2)],
			password: ['', Validators.minLength(5)],
			contact: fb.group({
				phone: [''],
				email: ['']
			})
		});
	}

	get userName(): any { return this.form.get('userName'); }
	get password(): any { return this.form.get('password'); }
	get phone(): any { return this.form.get('contact.phone'); }
	get email(): any { return this.form.get('contact.email'); }

	constructor() {
		this.form.setValue({userName: 'admin', password: '12345', phone: '123-123', email: 'mail@example.com'});
	}

	onSubmit(): void {
		console.log(this.form.value);
		// Will print: {userName: 'admin', password: '12345',
		// phone: '123-123', email: 'main@example.com'}
		console.log(this.form.status);
		// Will print: VALID
	}
}