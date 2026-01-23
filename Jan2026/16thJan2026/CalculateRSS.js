function calculateRSS(
  oneK = 0,
  tenK = 0,
  thrtyK = 0,
  fifTyK = 0,
  oneFiftyK = 0,
  fiveHunK = 0,
  extraM = 0
) {

  const result =
    oneK +
      10 * tenK +
      30 * thrtyK +
      50 * fifTyK +
      150 * oneFiftyK +
      500 * fiveHunK

      return (result/1000) + extraM
}
console.log(calculateRSS(14081, 553, 4, 47, 11, 10, .721))