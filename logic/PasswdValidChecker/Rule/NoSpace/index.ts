import Rule from '..';

export default class NoSpace extends Rule {
  check (passwd: string) {
    let ret = true;
    Object.values(passwd).forEach((v) => {
      if (v === ' ' || v === '\n') {
        ret = false;
      }
    });
    return ret;
  }
}
