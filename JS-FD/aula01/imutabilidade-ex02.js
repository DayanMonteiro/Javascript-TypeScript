const students = [
    {
        name: 'Laryssa',
        grade: 7
    },
    {
        name: 'Dayan',
        grade: 4
    },
    {
        name: 'Pietra',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados: ');
console.log(getApprovedStudents(students));
/*
Alunos aprovados: 
[ { name: 'Laryssa', grade: 7 }, { name: 'Pietra', grade: 10 } ]
*/

console.log('\nLista de alunos:')
console.log(students);
/*
[
  { name: 'Laryssa', grade: 7 },
  { name: 'Dayan', grade: 4 },
  { name: 'Pietra', grade: 10 }
]
*/