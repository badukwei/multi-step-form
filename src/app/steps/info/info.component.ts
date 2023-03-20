import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/service/form-data.service';

/**
 * A component that handles collecting personal information for the multi-step form.
 */
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  // An output event emitter for the next step in the form.
  @Output() next = new EventEmitter<number>();

  // The FormGroup instance for the personal information form.
  infoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService
  ) {}

  /**
   * Initializes the infoForm FormGroup instance.
   */
  ngOnInit(): void {
    this.infoForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
      phone: this.formBuilder.control('', Validators.required),
    });
  }

  /**
   * Saves the personal information in the formDataService and emits the next event.
   */
  goToNextStep() {
    this.formDataService.setBillingData('info', this.infoForm.value);
    this.next.emit();
  }
}


