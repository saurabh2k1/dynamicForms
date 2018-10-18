import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COMMA, ENTER} from '@angular/cdk/keycodes';





@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  createForm: FormGroup;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fTypes = [
    "input",
    "button",
    "select",
    "date",
    "radiobutton",
    "checkbox",
    "unit"
  ];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      label: ['', Validators.required],
      name: ['', Validators.required],
      selType: [''],
      options: ['']
    });
  }

  selected() {
    console.log(this.createForm.controls.selType.value);
  }

}
