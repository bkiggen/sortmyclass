
/**
 * dfghjfghj
 */
export default class Classrooms {

  /**
   * dfghj
   */
  constructor() {
    this.classRoomArray = [];
    this.studentsArray = [];
  }



  sortClass(numberOfClasses) {
    if (numberOfClasses === undefined) {
      throw "numberOfClasses is undefined";

    }
    this.classRoomArray = [];
    for (let i = 0; i < numberOfClasses; i++) {
      this.classRoomArray.push([]);
    }
    let MaleStudents = this.studentsArray.filter(student => student.gender === "male");
    let FemaleStudents = this.studentsArray.filter(student => student.gender === "female");

    let i = 0;
    MaleStudents.forEach(studentX => {
        this.classRoomArray[i].push(studentX);
        i++;
        if (i > (numberOfClasses - 1)) {
          i = 0;
        }
    });

    i = 0;
    FemaleStudents.forEach(studentX => {
      this.classRoomArray[i].push(studentX);
      i++;
      if (i > (numberOfClasses - 1)) {
        i = 0;
      }
    });
  }
}
