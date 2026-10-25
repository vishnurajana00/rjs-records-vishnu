function getStudentDetails(students) {
    return students.map(({ name, age, grade }) => {
        return `${name} ${age} ${grade}`;
    });
}

const students = [
    { name: "jeeva", age: 21, grade: "A" },
    { name: "Akash", age: 20, grade: "B" }
];

console.log(getStudentDetails(students));

module.exports = getStudentDetails;