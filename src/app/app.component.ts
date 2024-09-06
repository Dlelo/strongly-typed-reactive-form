import { Component } from '@angular/core';
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
  gender:FormControl<string | null>

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
export class AppComponent {
  title = 'Angular reactive form';

  registerForm: FormGroup<RegisterForm> = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
  });

  genders = [
    {id:1, name:'male'},
    {id:2, name:'female'},
    {id:2, name:'other'}
  ]

onRegister(): void {
  this.registerForm.markAllAsTouched();
  this.registerForm.dirty;
  console.log("registerForm", this.registerForm.value);
  console.log("registerForm", this.registerForm.getRawValue());

}
  

}
