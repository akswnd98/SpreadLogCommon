import Rule from '..';

export default class IsSmallChar extends Rule {
  check (passwd: string) {
    return /[a-z]+/.test(passwd);
  }
}
