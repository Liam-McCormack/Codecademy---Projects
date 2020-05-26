
const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
        return 6;
      case 'tuesday':
        return 6.5;
      case 'wednesday':
        return 7;
      case 'thursday':
        return 6;
      case 'friday':
        return 7.25;
      case 'saturday':
        return 9;
      case 'sunday':
        return 11;
      default:
        return 'Please enter a valid day.';
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = idealHours => idealHours * 7;
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(12);
    if (actualSleepHours === idealSleepHours) {
      console.log('You have had the perfect amount of sleep this week!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('You have had more sleep than needed this week by ' + (actualSleepHours - idealSleepHours) + ' hours.');
    } else if (actualSleepHours < idealSleepHours) {
        console.log('You need ' + (idealSleepHours - actualSleepHours) + ' hours more rest this week.');
      }
    }
    
  calculateSleepDebt();