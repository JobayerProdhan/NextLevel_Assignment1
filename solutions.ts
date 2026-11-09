function multiplyValue(value:number,multiplier?:number):number{
    if(multiplier === undefined){
        return value*2;
    }
    return value*multiplier;
}



function processInput(value:string|number|boolean):string|number|boolean{
    if(typeof value === "string"){
        value =value.trim();
        value = value.toLowerCase();
        return value;
    }
    else if(typeof value === 'number'){
        return value * 10;
    }
    else {
        if(value === true){
         return 'Active';
        }
        return 'Inactive';
    } 
}

function formatCoordinate(cordinate:readonly [number,number,string]):string{
    const [latitude,longitue,locationName] = cordinate;

    return `Location: ${locationName} (${latitude}, ${longitue})`
}


function concatenateArrays<T>(...arrays:T[][]):T[]{
    const result: T[] = [];

    for(const member of arrays){
        result.push(...member)
    }

    return result;
}


interface Course{
    title:string,
    students:number,
    isPublished:boolean
}

function getPopularCourses(courses:Course[],minStudents:number):Course[]{
    const ans:Course[] = [];
    
    for(const course of courses){
        if(course.isPublished=== true && course.students>minStudents){
            ans.push(course)
        }
    }
    return ans;
}

function pluckValues<T,K extends keyof T>(items:T[],key:K){
    const result:T[K][] = [];

    for(const item of items){
        result.push(item[key])
    }

    return result;
}


class Employee {
    protected name:string;
    private baseSalary:number

    constructor(name:string,baseSalary:number){
        this.baseSalary = baseSalary;
        this.name = name;
    }

    getDetails():string{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager  extends Employee{
    private department:string;

    constructor(name:string,baseSalary:number,department:string){
        super(name,baseSalary);
        this.department = department;
    }

    getRoleInfo():string {
        return `Manager of ${this.department}: ${this.name}`
    }
}


async function validateAgeAsync(age:number):Promise<string> {
    if (age < 18){
        throw new Error('Access Denied: Must be 18 or older')
    }

    await new Promise<void>((resolve) =>{
        setTimeout(resolve,1000 );
    });

    return 'Access Granted';
}



