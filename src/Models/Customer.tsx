import { IBase } from "../Constants/Common/BaseModel";

export interface Customer extends IBase {
  userId?: number | null;
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export interface SessionUser {
  customerId: number;
  expiration: Date;
  token: string;
  userName: string;
  userId: number;
  userRoles: string;
}
