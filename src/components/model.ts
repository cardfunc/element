import * as model from "@cardfunc/model"

// tslint:disable-next-line: no-empty-interface
export interface AuthorizationCreatableSafe extends model.Authorization.Creatable.Safe {
}

export type MerchantKeyInfo = model.Merchant.Key.KeyInfo
export const MerchantKeyInfoUnpack = model.Merchant.Key.KeyInfo.unpack
