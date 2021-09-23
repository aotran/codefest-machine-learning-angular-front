import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public predictionForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
private generateForm(): void{
  this.predictionForm = this.formBuilder.group({
    time: ['', [Validators.required]],
    amount: [0, [Validators.required]]
  });
}
  
}
