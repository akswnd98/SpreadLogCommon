import Rule from './Rule';
import IsCapitalChar from './Rule/IsCapitalChar';
import IsLengthOver from './Rule/IsLengthOver';
import IsNumber from './Rule/IsNumber';
import IsSmallChar from './Rule/IsSmallChar';
import IsSpecialChar from './Rule/IsSpecialChar';
import NoSpace from './Rule/NoSpace';

export default class PasswdValidChecker {
  rules: Rule[] = [
    new IsCapitalChar(),
    new IsNumber(),
    new IsSmallChar(),
    new IsSpecialChar(),
    new NoSpace(),
    new IsLengthOver(),
  ];

  check (passwd: string) {
    let ret = true;
    this.rules.forEach ((v) => {
      if (!v.check(passwd)) {
        ret = false;
      }
    });
    return ret;
  }
}
