import Rule from '..';

export default class IsLengthOver extends Rule {
  check (passwd: string) {
    return passwd.length >= 10;
  }
}
