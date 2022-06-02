import Rule from '..';

export default class IsNumber extends Rule {
  check (passwd: string) {
    let ret = false;
    Object.values(passwd).forEach((v) => {
      for (let i = 0; i < 10; i++) {
        if (i.toString() === v) {
          ret = true;
          break;
        }
      }
    });
    return ret;
  }
}
