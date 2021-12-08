const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (SalaryA, salaryB) {
        return SalaryA - salaryB;
    }
);

function esPar (numerito) {
    return (numerito % 2 === 0);
}