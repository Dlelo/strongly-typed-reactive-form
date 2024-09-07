import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';

interface RegisterForm  {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password:FormControl<string | null>;
  ages:FormControl<string | null>

}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent  {
  title = 'Angular reactive form';

  registerForm: FormGroup<RegisterForm> = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    ages: new FormControl('', [Validators.required]),
  });



  constructor(private fb: FormBuilder) {}


  // registerFormTwo = this.fb.group({
  //   username: ['', Validators.required],
  //   email: ['', [Validators.required, Validators.email]],
  //   password: ['', Validators.required],
  // });

  ages = [
    {id:1, range:'18 years and below'},
    {id:2, range:'Below 35 years'},
    {id:2, range:'Above 35 years'}
  ]

onRegister(): void {
  this.registerForm.markAllAsTouched();
  this.registerForm.dirty;
  console.log("registerForm", this.registerForm.value);
  console.log("registerForm", this.registerForm.getRawValue());

}
  

}
