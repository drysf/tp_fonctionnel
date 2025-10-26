
let counter = 0;

function add(a: number, b: number): number {
    return a + b;
}

function increment(): number {
    counter++;
    return counter;
}

console.log("add(2, 3) =", add(2, 3));
console.log("add(2, 3) =", add(2, 3));

console.log("increment() =", increment());
console.log("increment() =", increment());

console.log("\n--- Question ---");
console.log("Pourquoi add est-elle prévisible ?");
console.log("→ Car elle est PURE : mêmes entrées = même sortie, sans effet de bord");
console.log("\nPourquoi increment ne l'est pas ?");
console.log("→ Car elle est IMPURE : elle modifie une variable externe (counter)");

const student = { name: "Léo", grade: 14 };

function updateGrade(student: { name: string; grade: number }, newGrade: number) {
    return { ...student, grade: newGrade };
}

const updatedStudent = updateGrade(student, 18);
console.log("Original:", student);
console.log("Modifié:", updatedStudent);

function applyNTimes(f: (x: number) => number, n: number, x: number): number {
    let result = x;
    for (let i = 0; i < n; i++) {
        result = f(result);
    }
    return result;
}

function applyNTimesRecursive(f: (x: number) => number, n: number, x: number): number {
    if (n === 0) return x;
    return applyNTimesRecursive(f, n - 1, f(x));
}

const double = (x: number) => x * 2;

console.log("applyNTimes(double, 3, 1) =", applyNTimes(double, 3, 1)); // 8
console.log("applyNTimesRecursive(double, 3, 1) =", applyNTimesRecursive(double, 3, 1)); // 8


const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log("Nombres pairs × 2 puis somme:", result);

function sum(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
}

function average(numbers: number[]): number {
    return numbers.length === 0 ? 0 : sum(numbers) / numbers.length;
}

function product(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc * n, 1);
}

console.log("sum([1,2,3,4,5,6]) =", sum(numbers));
console.log("average([1,2,3,4,5,6]) =", average(numbers));
console.log("product([1,2,3,4,5,6]) =", product(numbers));

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];

const firstAdult = users.find((user) => user.age >= 18);
console.log("Premier utilisateur majeur:", firstAdult);

const hasMinor = users.some((user) => user.age < 18);
const allAbove10 = users.every((user) => user.age > 10);

console.log("Y a-t-il au moins un mineur ?", hasMinor);
console.log("Tous les utilisateurs ont plus de 10 ans ?", allAbove10);

const names = users.map((u) => u.name);
console.log("Noms:", names);
console.log("Alice est présent ?", names.includes("Alice"));
console.log("Eve est présent ?", names.includes("Eve"));

const usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const allHobbies = usersWithHobbies.flatMap((user) => user.hobbies);
console.log("Tous les hobbies:", allHobbies);

const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const twoYoungest = sortedByAge.slice(0, 2);

console.log("Original (non modifié):", users);
console.log("Triés par âge:", sortedByAge);
console.log("Les 2 plus jeunes:", twoYoungest);




type User = { name: string; age: number; country: string };

const data: User[] = [
    { name: "Alice", age: 25, country: "France" },
    { name: "Bob", age: 15, country: "France" },
    { name: "Charlie", age: 30, country: "Spain" },
    { name: "Diana", age: 22, country: "France" },
];

const frenchAdults = data.filter((user) => user.age >= 18 && user.country === "France");
console.log("1. Adultes français:", frenchAdults);

const frenchAdultNames = frenchAdults.map((user) => user.name);
console.log("2. Leurs noms:", frenchAdultNames);

const sortedFrenchAdults = [...frenchAdults].sort((a, b) => b.age - a.age);
console.log("3. Triés par âge décroissant:", sortedFrenchAdults);

const averageAge = frenchAdults.reduce((acc, user) => acc + user.age, 0) / frenchAdults.length;
console.log("4. Moyenne d'âge des adultes français:", averageAge);

const pipeline = data
    .filter((user) => user.age >= 18 && user.country === "France")
    .sort((a, b) => b.age - a.age);

const avgAge = pipeline.reduce((acc, user) => acc + user.age, 0) / pipeline.length;

console.log("Adultes français triés:", pipeline.map((u) => u.name));
console.log("Moyenne d'âge:", avgAge);

