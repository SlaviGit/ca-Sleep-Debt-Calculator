const getSleepHours = day => {
  if (day ==='monday' || day ==='tuesday' || day ==='wednesday' || day ==='thursday' || day ==='friday' || day ==='saturday' || day ==='sunday') {
    return 8;
  } 
  return 0;
}

/*print sleep hours required
console.log(getSleepHours('tuesday'))*/

//calculate total hours slept
const getActualSleepHours = () => {
  return (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));
}

/*show required hours of sleep
console.log(getActualSleepHours());*/

const getIdealSleepHours = () => {
  const idealHours = 8.2;
  return (Math.round(idealHours * 7));
}

/* show ideal sleep hours
console.log(getIdealSleepHours());*/

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('you have got the perfect amount of sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`you got ${actualSleepHours - idealSleepHours} hours more sleep than required`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`you have slept ${idealSleepHours - actualSleepHours} hours less than usual. Get some rest!`);
  }
}
calculateSleepDebt();
