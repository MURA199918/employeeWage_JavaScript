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

//UC7 Helper functions
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
    //UC7A - Calc total wage using array forEach traversal or reduce method
    let totalEmpWage = 0;
    function sum(dailyWage){
        totalEmpWage += dailyWage;
    }
    empDailyWageArr.forEach(sum);
    console.log("UC7A - Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);

    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("UC7A - Emp Wage with reduce: "+empDailyWageArr.reduce(totalWages, 0));

    //UC7B - Show day along with daily wage using array map helper function
    let dailyCntr = 0;
    function mapDayWithWage(dailyWage){
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
    }
    let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
    console.log("UC7B - Daily wage Map");
    console.log(mapDayWithWageArr);

    //UC7C - Show days when full time wage of 160 were earned
    function fulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
    console.log("UC7C - Daily Wage filter when fulltime wage earned");
    console.log(fullDayWageArr);

    //UC7D - Find first occurrence when full time wage was earned using find function
    function findFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC7D - First time fulltime wage was earned on day: "+mapDayWithWageArr.find(findFulltimeWage));

    //UC7E - Check if every element of full time wage is truely holding full time wage
    function isAllFulltimeWage(dailyWage){
        return dailyWage.includes("160");
    }
    console.log("UC7E - Check all element have full time wage: "+fullDayWageArr.every(isAllFulltimeWage));

    //UC7F - Check if there is any part time wage
    function isAnyPartTimeWage(dailyWage){
        return dailyWage.includes("80");
    }
    console.log("UC7F - Check if any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

    //UC7G - Find number of days the employee worked
    function totalDaysWorked(numOfDays, dailyWage){
        if(dailyWage > 0) return numOfDays+1;
        return numOfDays;
    }
    console.log("UC7G - Number of days emp worked: "+empDailyWageArr.reduce(totalDaysWorked, 0));
}

//UC8 - Maps
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
    let empDailyWageMap = new Map();

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
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    console.log(empDailyWageMap);
    function totalWages(totalWage, dailyWage){
        return totalWage + dailyWage;
    }
    console.log("UC8 - Emp Wage Map totalHrs: "+Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

}

//UC9 - ARROW FUNCTIONS
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
    let empDailyHrsMap = new Map();
    let empDailyWageMap = new Map();

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
        empDailyHrsMap.set(totalWorkingDays, empHrs);
        empDailyWageMap.set(totalWorkingDays, calcDailyWage(empHrs));
    }

    const findTotal = (totalVal, dailyVal) => {
        return totalVal + dailyVal;
    }
    let count = 0;
    let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
    let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
    console.log("UC9 - Emp Wage with Arrow: "+" Total Hours: "+totalHours+" Total Wages: "+totalSalary);

    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach( (value, key, map) => {
        if(value == 8) fullWorkingDays.push(key);
        else if(value == 4) partWorkingDays.push(key);
        else nonWorkingDays.push(key);
    });
    console.log("Full working days: "+fullWorkingDays);
    console.log("Part working days: "+partWorkingDays);
    console.log("Non working days: "+nonWorkingDays);
}

//UC10 - Object Creation
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
    let empDailyHrsAndWageArr = new Array();

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
        empDailyHrsAndWageArr.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString(){
                    return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                           ' And Wage Earned = ' + this.dailyWage
                },
            }
        );
    }
    console.log("UC10 - Showing daily hours worked and wage earned: "+empDailyHrsAndWageArr);
}

//UC11 - Object Operations using Arrow Functions
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
    let empDailyHrsAndWageArr = new Array();

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
        empDailyHrsAndWageArr.push(
            {
                dayNum:totalWorkingDays,
                dailyHours:empHrs,
                dailyWage: calcDailyWage(empHrs),
                toString(){
                    return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours +
                           ' And Wage Earned = ' + this.dailyWage
                },
            }
        );
    }
    let totalWages = empDailyHrsAndWageArr
                     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                     .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
    let totalHours = empDailyHrsAndWageArr
                     .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                     .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
    console.log("UC11A - Total Hours: "+totalHours+" Total Wages: "+totalWages);

    process.stdout.write("UC11B - Logging full work days")
    empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                         .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));

    let partWorkingDaysStrArr = empDailyHrsAndWageArr
                                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                                .map(dailyHrsAndWage => dailyHrsAndWage.toString());
    console.log("\nUC11C - PartWorkingDayStrings: "+partWorkingDaysStrArr);

    let nonWorkingDayNums = empDailyHrsAndWageArr
                            .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                            .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
    console.log("UC11D - NonWorkingDayNums: "+nonWorkingDayNums);
}

//UC11, UC12 and UC13 - Classes for EmployeePayrollData with Regex and Error
{
    class EmployeePayrollData{
        //property
        id;
        salary;
        gender;
        startDate;

        //constructor
        constructor(...params){
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
        
        //getter and setter method
        get name() { return this._name; }
        set name(name) {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if(nameRegex.test(name)){
                this._name = name;
            }else{
                throw 'Name is Incorrect';
            }
        }

        //method
        toString(){
            const options = { year: 'numeric', month: 'long', day: 'numeric'};
            const empDate = this.startDate === undefined ? "undefined" :
                            this.startDate.toLocaleDateString("en-US", options);
            return "id=" + this.id + ", name='" + this.name + ", salary=" + this.salary + ", "+
                   "gender=" + this.gender + ", startDate=" + empDate;
        }
    }

    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
    console.log(employeePayrollData.toString());
    try{
        employeePayrollData.name = "john";
        console.log(employeePayrollData.toString());
    }catch(e){
        console.error(e);
    }
    let newEmployeePayrollData = new EmployeePayrollData(1, "Terrisa", 30000, "F", new Date());
    console.log(newEmployeePayrollData.toString());
}