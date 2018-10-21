import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';
import { COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FieldConfig } from '../field.interface';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {


  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fTypes = [
    'input',
    'button',
    'select',
    'date',
    'radiobutton',
    'checkbox',
    'unit'
  ];
  inputTypes = ['color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week'];
  fOptions: string[] = [];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm: FormGroup;
  email: AbstractControl;
  fields: FieldConfig[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.maxLength(500)]],
      label: [''],
      type: [''],
      inputType: [''],
      options: [],
      value: [''],
      unit: [''],
      // validations: this.fb.group({
      //   name: [''],
      //   validator: [],
      //   message: ['']
      // })
      validations: this.fb.array([
        this.initValidation(),
      ]),
    });

  }

  initValidation() {
    return this.fb.group({
      name: [''],
      validator: [],
      validatorValue: [''],
      message: ['']
    });
  }

  addValidation() {
    const control = <FormArray>this.myForm.controls['validations'];
    control.push(this.initValidation());
  }

  removeValidation(i: number) {
    const control = <FormArray>this.myForm.controls['validations'];
    control.removeAt(i);
  }

  public send() {
    this.fields.push(this.myForm.value);
    this.myForm.reset();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.fOptions.push(value);
      this.myForm.controls.options.setValue(this.fOptions);
    }

    if (input) {
      input.value = '';
    }
  }

  remove(opt: any): void {
    const index = this.fOptions.indexOf(opt);
    if (index >= 0) {
      this.fOptions.splice(index, 1);
    }
    this.myForm.controls.options.setValue(this.fOptions);
  }


  selected() {
    console.log(this.myForm.controls.selType.value);
  }

  submitForm() {
    console.log(this.myForm.value);
  }

}
