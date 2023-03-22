const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
    // 1. Створити функцію, яка повертає список предметів
    const getSubjects = (student = students[0]) => {
        const subjectslist = Object.keys(student.subjects);
        subjectslist.forEach((item, i) => {
            subjectslist[i] = item[0].toUpperCase() + item.slice(1);
            subjectslist[i] = subjectslist[i].split('');
            subjectslist[i].forEach((char, j) => {
                if (char == '_' || char == '-' ) subjectslist[i][j] = ' ';
            });
            subjectslist[i] = subjectslist[i].join('');
        });
        const style = `["${subjectslist.join('", "')}"]`;
        return subjectslist;
    }
    console.log("Список предметів: " + getSubjects(students[0]));
    
    // 2. Створити функцію, яка поверне середню оцінку по усім предметам
    function getAverageMark(students) {
        let sum = 0;
        let res = [];
    
        for ( let key in students ) {
            res = Object.values( students.subjects ).reduce( (prev, item) => {
        return ( prev.concat(item) );
            });
        }
        for ( let i = 0; i < res.length; i++){
            sum+= res[i];
        }
        return ( sum / res.length ).toFixed(2);
    }
    
    console.log("Середня оцінка: " +  getAverageMark(students[2]));
    
    // 3. Створити функцію, яка повертає інформацію 
    const getStudentInfo = (obj) => {
        let info = {}
        info.course = obj.course
        info.name = obj.name
        info.averageMark = getAverageMark(obj)
        return info
    }
    
    console.log("Інформація про студента: ", getStudentInfo(students[1]));
    
    // 4. Створити функцію, яка повертає імена студентів у алфавітному порядку.
    function getStudentsNames(students) {
        let studentsNames = students.map((stud) => stud.name).sort();                 
        return studentsNames;
    }
    console.log("Імена студентів у алфавітному порядку: "+ getStudentsNames(students));
    
    // 5. Створити функцію, яка повертає кращого студента
    const getBestStudent = (students) => {
        let bestMark = 0;
        let nameBestStud;
        students.forEach(student => {
            if (bestMark < getAverageMark(student)) {
                bestMark = getAverageMark(student);
                nameBestStud = student.name;
         }
        });
        return nameBestStud;
    }
    console.log("Ім`я кращого студента: "+ getBestStudent(students));
    
    // 6. Створити функцію, яка повертає обє'кт, в якому ключі це букви у слові, а значеня – кількість їх повторень.
    
    const calculateWordLetters = word => {
        word = word.split('');
        const lettersInWord = {};
        const symbols = [];
    
        word.forEach(symbol => {
            if (!symbols.some(item => item == symbol)) {
                lettersInWord[symbol] = 1;
                symbols.push(symbol);
            }
            else lettersInWord[symbol]++;
        });
    
        return lettersInWord;
    }
    console.log("Кількість букв: ", calculateWordLetters("тест"));
    console.log("Кількість букв: ", calculateWordLetters("Кількість букв"));