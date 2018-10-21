import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-validation',
  templateUrl: './add-validation.component.html',
  styleUrls: ['./add-validation.component.css']
})
export class AddValidationComponent implements OnInit {

  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
