import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public predictionForm: FormGroup;
  // submitted?: string;
  
  constructor(private formBuilder: FormBuilder, private fetchApi: FetchApiService) { }

  ngOnInit(): void {
    this.generateForm();
  }
private generateForm(): void{
  // this.predictionForm = this.formBuilder.group({
  //   time: ['', [Validators.required]],
  //   amount: [0, [Validators.required]]
  // });
  this.predictionForm = new FormGroup({
    time: new FormControl(),
    amount: new FormControl()
});
}

sendData() {
  //conversion to object format
  let convertedPoint = {data: ''};
  convertedPoint.data += this.predictionForm.controls['time'].value + ",";
  convertedPoint.data += "-5.76687873469586,-8.402153677689151,0.0565432462509224,6.950982944852201,9.880564025528619,-5.77319176920948,-5.74887919911031,0.721742893680168,-1.07627357886614,2.6886699325222403,-1.4751453155689198,-0.0504679838548109,0.11350047541885,0.98434361557577,0.363968739240705,-0.674356809209657,0.32746351441832106,0.0914699151148088,1.30794073758635,2.49322389130791,0.8803950965480558,-0.130435547668829,2.2414714135436498,0.665345536539228,-1.89004142193457,-0.12080276384298401,0.0732685585796402,0.5837994183175179,"
  convertedPoint.data += this.predictionForm.controls['amount'].value;

  //send request as JSON string
  this.fetchApi.sendData(convertedPoint).subscribe(json => {
  // this.submitted = JSON.stringify(json);
  console.log(JSON.stringify(json))
  this.predictionForm.reset();
  });
}
  
}
