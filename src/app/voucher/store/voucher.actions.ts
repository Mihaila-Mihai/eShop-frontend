import {createAction, props} from "@ngrx/store";
import {VoucherInfo} from "../content/voucher.mock";

export const addVoucher = createAction('[Voucher] Add Voucher', props<{ voucherInfo: VoucherInfo }>());
export const addVoucherSuccess = createAction('[Voucher] Add Voucher Success');
