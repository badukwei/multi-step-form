import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/service/form-data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit{
  @Output() onNext = new EventEmitter<any>();
  infoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
    ) {}

  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
      phone: this.formBuilder.control('', Validators.required),
    });
  }

  save() {
    this.formDataService.setBillingData('info',this.infoForm.value);
    this.onNext.emit();
  }
}
