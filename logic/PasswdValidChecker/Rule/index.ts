export default abstract class Rule {
  abstract check (passwd: string): boolean;
}
