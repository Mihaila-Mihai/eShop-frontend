import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {VoucherInfo} from "../content/voucher.mock";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/AppState";
import * as VoucherActions from '../store/voucher.actions';

@Component({
  selector: 'app-add-voucher',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, RouterLink],
  templateUrl: './add-voucher.component.html',
  styleUrls: ['./add-voucher.component.scss']
})
export class AddVoucherComponent implements OnInit {
  public voucherForm: FormGroup = this.fb.group({
    code: ['', [Validators.required]],
    value: ['', Validators.required]
  });

  get code() {
    return this.voucherForm.get("code");
  }

  get value() {
    return this.voucherForm.get("value");
  }

  constructor(private fb: FormBuilder, private store: Store<AppState>) {

  }

  public ngOnInit() {
  }

  public onSubmit() {
    const voucherInfo: VoucherInfo = {
      voucherCode: this.code?.value,
      value: this.value?.value,
      isActive: true
    }

    this.store.dispatch(VoucherActions.addVoucher({voucherInfo: voucherInfo}));
  }
}
