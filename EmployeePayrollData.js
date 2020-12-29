//UC11, UC12, UC13 and UC14 - Classes for EmployeePayrollData with Regex, conditions and Errors
{
    class EmployeePayrollData{
        //property
       
        //constructor
        constructor(...params){
            this.id = params[0];
            this.name = params[1];
            this.salary = params[2];
            this.gender = params[3];
            this.startDate = params[4];
        }
        
        //getter and setter method
        get id() { return this._id; }
        set id(id) {
            if(id>=0){
                this._id = id;
            }else{
                throw 'Id is Incorrect';
            }
        }

        get name() { return this._name; }
        set name(name) {
            let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
            if(nameRegex.test(name)){
                this._name = name;
            }else{
                throw 'Name is Incorrect';
            }
        }

        get salary() { return this._salary; }
        set salary(salary) {
            if(salary>=0){
                this._salary = salary;
            }else{
                throw 'Salary is Incorrect';
            }
        }

        get gender() { return this._gender; }
        set gender(gender) {
            if(gender=='M' || gender=='F'){
                this._gender = gender;
            }else{
                throw 'Gender is Invalid';
            }
        }

        get startDate() { return this._startDate; }
        set startDate(startDate) {
            let dNow = new Date();
            if(dNow.getTime() >= startDate.getTime()){
                this._startDate = startDate;
            }else{
                throw 'Date is Invalid';
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

    let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
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