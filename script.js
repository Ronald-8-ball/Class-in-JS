class Student{
constructor(name){
this.studentName = name;
}
static hello(){
return "Hello";
}
present(){
return 'My name is  ' + this.studentName;
}
}
class Grade extends Student{
constructor(name, grade){
super(name);
this.studentGrade = grade
}
show(){
return this.present() + ', from ' +
this.studentGrade
}
}
let myStudent = new Grade("Ronald", "grade 10");
document.getElementById("p1").innerHTML = myStudent.show()
document.getElementById("p2").innerHTML = Student.hello()













