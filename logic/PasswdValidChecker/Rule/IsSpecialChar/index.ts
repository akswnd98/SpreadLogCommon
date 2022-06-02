import Rule from '..';

export default class IsSpecialChar extends Rule {
  check (passwd: string) {
    let ret = false;
    Object.values(passwd).forEach((v) => {
      if (/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/.test(v)) {
        ret = true;
      }
    });
    return ret;
  }
}
