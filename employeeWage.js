console.log("Welcome to employee Wage problem");

//UC1 IF ELSE Condition
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if(empCheck == IS_ABSENT){
          console.log("UC1- Employee is Absent");
    }else{
          console.log("UC1- Employee is PRESENT");
   }
}

//UC2- SwitchCase
{
        const IS_PART_TIME = 1;
        const IS_FULL_TIME = 2;
        const PART_TIME_HOURS = 4;
        const FULL_TIME_HOURS = 8;
        const WAGE_PER_HOUR = 20;

        let empHrs = 0;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        switch(empCheck){
            case IS_PART_TIME: 
               empHrs = PART_TIME_HOURS;
               break;
            case IS_FULL_TIME:
               empHrs = FULL_TIME_HOURS;
               break;
            default:
               empHrs = 0;
        }

        let empWage = empHrs * WAGE_PER_HOUR;
        console.log("UC2- EmpWage: "+empWage);
}

//UC3- Functions
{
        const IS_PART_TIME = 1;
        const IS_FULL_TIME = 2;
        const PART_TIME_HOURS = 4;
        const FULL_TIME_HOURS = 8;
        const WAGE_PER_HOUR = 20;

        let empCheck = Math.floor(Math.random() * 10) % 3;

        function getWorkingHours(empCheck){
        switch(empCheck){
                case IS_PART_TIME: 
                   return PART_TIME_HOURS;
                case IS_FULL_TIME:
                   return FULL_TIME_HOURS;
                default:
                   return 0;
            }
         }

         let empHrs = 0;
         empHrs = getWorkingHours(empCheck);
         let empWage = empHrs * WAGE_PER_HOUR;
         console.log("UC3- EmpWage: "+empWage);
}

//UC4- For Loop
{
        const IS_PART_TIME = 1;
        const IS_FULL_TIME = 2;
        const PART_TIME_HOURS = 4;
        const FULL_TIME_HOURS = 8;
        const WAGE_PER_HOUR = 20;
        const NUM_OF_WORKING_DAYS = 2;


        function getWorkingHours(empCheck){
            switch(empCheck){
                case IS_PART_TIME: 
                   return PART_TIME_HOURS;
                case IS_FULL_TIME:
                   return FULL_TIME_HOURS;
                default:
                   return 0;
            }
        }

        let empHrs = 0;
        for(let day = 0; day < NUM_OF_WORKING_DAYS; day++){
            let empCheck = Math.floor(Math.random() * 10) % 3;
            empHrs += getWorkingHours(empCheck);
        }

        let empWage = empHrs * WAGE_PER_HOUR;
        console.log("UC4- Total Hrs: "+empHrs+ " UC4- Emp Wage: "+empWage);
}

//UC5- While Loop
{
                const IS_PART_TIME = 1;
                const IS_FULL_TIME = 2;
                const PART_TIME_HOURS = 4;
                const FULL_TIME_HOURS = 8;
                const WAGE_PER_HOUR = 20;
                const NUM_OF_WORKING_DAYS = 2;
                const MAX_HRS_IN_MONTH = 100;


                function getWorkingHours(empCheck){
                    switch(empCheck){
                        case IS_PART_TIME: 
                            return PART_TIME_HOURS;
                        case IS_FULL_TIME:
                            return FULL_TIME_HOURS;
                        default:
                            return 0;
                    }
                }

                let totalempHrs = 0;
                let totalWorkingDays = 0;
                while(totalempHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
                    totalWorkingDays++;
                    let empCheck = Math.floor(Math.random() * 10) % 3;
                    totalempHrs += getWorkingHours(empCheck);
                }

                let empWage = totalempHrs * WAGE_PER_HOUR;
                console.log("UC5-Total Days: "+totalWorkingDays+ " Total Hrs: "+totalempHrs+ " Emp Wage: "+empWage);
}

//UC6 - Arrays
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const NUM_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 160;

    let totalEmpHrs = 0;
    let totalWorkingDays = 0;
    let empDailyWageArr = new Array();

    function calcDailyWage(empHrs){
        return empHrs * WAGE_PER_HOUR;
    }

    function getWorkingHours(empCheck){
        switch(empCheck){
            case IS_PART_TIME: 
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArr.push(calcDailyWage(empHrs));
    }

    let empWage = calcDailyWage(totalEmpHrs);
    console.log("UC6 - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+empWage);
}