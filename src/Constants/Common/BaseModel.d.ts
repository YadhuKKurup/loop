export interface IBase {
  id?: number;
  CreatedDate?: string;
  UpdatedDate?: string;
  CreatedBy?: string;
  UpdatedBy?: string;
}

export type Nullable<T> = { [P in keyof T]?: T[P] | null }