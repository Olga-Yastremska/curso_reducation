const students = [
    "Олександр",
    "Ігор",
    "Олена",
    "Іра",
    "Олексій",
    "Світлана"
 ];
 
 const themes = [
    "Диференційне рівняння",
    "Теорія автоматів",
    "Алгоритми і структури даних"
 ];
 const marks = [4, 5, 5, 3, 4, 5];
 
//Пари студентів - Хлопчик, дівчинка
const studentsPairs = (stud) => {
    const boyAndGirl = new Array(new Array(), new Array(), new Array(),);
    boyAndGirl[0].splice(0, 0, stud[0], stud[2]);
    boyAndGirl[1].splice(0, 0, stud[1], stud[3]);
    boyAndGirl[2].splice(0, 0, stud[4], stud[5]);
    return boyAndGirl;
}
 const boyAndGirl = studentsPairs(students);
console.log(boyAndGirl)

// Теми для пар студентів
const themeForPairs = (students,themes) => {
    const studPairs = [];
    for (let i=0; i < students.length; i++){
        studPairs.push([students[i][0]+ ' i ' + students[i][1],themes[i]]);  
    }
    return studPairs; 
}
const studentsThemes = themeForPairs(boyAndGirl,themes);
console.log(studentsThemes)

// Оцінки студентів
const marksStudents = (students,marks) => { 
    const stMarks = [];
    for (let i=0; i < students.length; i++){

        stMarks.push([students[i], parseInt(marks[i])]);
    }
return stMarks;
}
const studentsMarks = marksStudents(students,marks);
console.log(studentsMarks);

// Рандомна оцінка студентам за тему
const randomRating = (themeStudents) => {
    const marksTheme = themeStudents;
    for (let i=0; i<marksTheme.length; i++) {
        marksTheme[i].push(Math.round(Math.random()*(5-1)+1))
    }
    return marksTheme;
}
const randRating = randomRating(boyAndGirl,themes,marks);
console.log(randRating);

