import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule,FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
userForm = this.fb.group({
  userName : [''],
  credential : this.fb.group ({
    email : [''],
    password : [''],
  }),
  
  address: this.fb.group ({
    street :[''],
    zip : [''],
    city : ['']
  })

})

  constructor(private fb: FormBuilder) { 
   
    }

  ngOnInit(): void {
  
  }
 onSubmit() {
  console.log(this.userForm.value);
 }
 
    
    
  }


