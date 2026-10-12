function calculateGrade(score){
    if (typeof score !== "number" || score < 0 || score > 100 ){
        return "invalid score";
    }
    if (score >= 90){
        return "A";
    }
    if (score >= 80){
        return "B";
    }
    if (score >= 70){
        return "C";
    }
    if (score >= 60){
        return "D";
    }
    if (score <= 50){
        return "F";
    }
}
function checkAccess(age, hasTicket){
 if (typeof age !== "number" || typeof hasTicket !== "boolean" ){
        return false;
 }
 if (age >= 18 && hasTicket === true){
    return true;
 }
 else{
    return false;
 }
}
console.log(calculateGrade(90))
console.log(checkAccess (23,true))
console.log("JavaScript is working");
