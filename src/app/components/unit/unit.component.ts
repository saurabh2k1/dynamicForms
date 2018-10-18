import { Component, OnInit } from '@angular/core';
import { FieldConfig } from '../../field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-unit',
  template: `
  <mat-form-field class="demo-full-width" [formGroup]="group">
  <input matInput [formControlName]="field.name" 
  [placeholder]="field.label" [type]="field.inputType">
  <span matSuffix>{{field.unit}}</span>
  <ng-container *ngFor="let validation of field.validations;"
  ngProjectAs="mat-error">
  <mat-error *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</mat-error>
   </ng-container>
  </mat-form-field>
  `,
  styles: []
})
export class UnitComponent implements OnInit {

  field: FieldConfig;

  group: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
