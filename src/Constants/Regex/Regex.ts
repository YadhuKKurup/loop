const NUMBER = /[^0-9]/g
const DECIMAL = /[^0-9.]/g
const CHARACTER = /[^A-Za-z]/g
const CHAR_SPACE = /[^A-Za-z ]/g
const CHAR_NUM = /[^a-zA-Z0-9,.\-\\/_&#@() ]+$/g;
const EMAIL = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
const PASSWORD_PATTERN =
  /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=!])([A-Za-z0-9@#$%^&+=!]{8,})$/;
const EMAIL_1 = /[^A-Za-z0-9@. ]/g

export const Regex = {
  NUMBER,
  DECIMAL,
  CHARACTER,
  CHAR_NUM,
  CHAR_SPACE,
  PASSWORD_PATTERN,
  EMAIL,
  EMAIL_1
}
