import Rule from '..';

export default class IsCapitalChar extends Rule {
  check (passwd: string) {
    return /[A-Z]+/.test(passwd);
  }
}
