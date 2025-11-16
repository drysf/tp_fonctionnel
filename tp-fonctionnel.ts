// partie 1 - fonctions pures et impures

// variable globale pour tester
let counter = 0;

/**
 * fonction pure qui additionne 2 nombres
 * @param a premier nombre
 * @param b deuxieme nombre
 * @returns la somme de a et b
 */
function add(a: number, b: number): number {
    return a + b;
}

/**
 * fonction impure, elle modifie counter qui est global
 * @returns la nouvelle valeur du compteur
 */
function increment(): number {
    counter++;
    return counter;
}

console.log("add(2, 3) =", add(2, 3));
console.log("add(2, 3) =", add(2, 3));

console.log("increment() =", increment());
console.log("increment() =", increment());

// Pourquoi add est prévisible?
// -> parce que c'est une fonction pure, avec les memes paramètres on a toujours le meme résultat
// pas d'effet de bord

// Pourquoi increment n'est pas prévisible ?
// -> elle modifie counter qui est une variable globale donc chaque appel change le résultat
// c'est une fonction impure

// partie 2 - immutabilité

const student = { name: "Léo", grade: 14 };

/**
 * met a jour la note sans modifier l'objet original
 * @param student l'objet etudiant
 * @param newGrade la nouvelle note
 * @returns un nouvel objet avec la note modifiée
 */
function updateGrade(student: { name: string; grade: number }, newGrade: number) {
    return { ...student, grade: newGrade };
}

// on vérifie que l'original n'a pas changé
const updatedStudent = updateGrade(student, 18);
console.log("Original:", student);
console.log("Modifié:", updatedStudent);

// partie 3 - fonctions d'ordre supérieur

/**
 * applique une fonction n fois sur une valeur
 * @param f la fonction a appliquer
 * @param n nombre de fois
 * @param x valeur initiale
 * @returns le resultat apres n applications
 */
function applyNTimes(f: (x: number) => number, n: number, x: number): number {
    let result = x;
    for (let i = 0; i < n; i++) {
        result = f(result);
    }
    return result;
}

/**
 * version recursive
 * @param f fonction a appliquer
 * @param n nombre de fois
 * @param x valeur de depart
 * @returns resultat final
 */
function applyNTimesRecursive(f: (x: number) => number, n: number, x: number): number {
    if (n === 0) return x;
    return applyNTimesRecursive(f, n - 1, f(x));
}

const double = (x: number) => x * 2;

console.log("applyNTimes(double, 3, 1) =", applyNTimes(double, 3, 1));
console.log("applyNTimesRecursive(double, 3, 1) =", applyNTimesRecursive(double, 3, 1));

// partie 4 - map filter reduce

const numbers = [1, 2, 3, 4, 5, 6];

// exercice 4.1
// on filtre les pairs, on multiplie par 2 et on somme
const result = numbers
    .filter((n) => n % 2 === 0)
    .map((n) => n * 2)
    .reduce((acc, n) => acc + n, 0);

console.log("Nombres pairs × 2 puis somme:", result);

/**
 * somme avec reduce
 * @param numbers tableau de nombres
 * @returns la somme totale
 */
function sum(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc + n, 0);
}

/**
 * moyenne en utilisant sum
 * @param numbers le tableau
 * @returns la moyenne
 */
function average(numbers: number[]): number {
    return numbers.length === 0 ? 0 : sum(numbers) / numbers.length;
}

/**
 * produit de tous les nombres
 * @param numbers tableau de nombres
 * @returns le produit
 */
function product(numbers: number[]): number {
    return numbers.reduce((acc, n) => acc * n, 1);
}

console.log("sum([1,2,3,4,5,6]) =", sum(numbers));
console.log("average([1,2,3,4,5,6]) =", average(numbers));
console.log("product([1,2,3,4,5,6]) =", product(numbers));

// partie 5 - autres fonctions

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 15 },
    { name: "Charlie", age: 30 },
    { name: "Diana", age: 17 },
];

// exercice 5.1 - find
// trouve le premier majeur
const firstAdult = users.find((user) => user.age >= 18);
console.log("Premier utilisateur majeur:", firstAdult);

// exercice 5.2 - some/every
// some = au moins un
// every = tous
const hasMinor = users.some((user) => user.age < 18);
const allAbove10 = users.every((user) => user.age > 10);

console.log("Y a-t-il au moins un mineur ?", hasMinor);
console.log("Tous les utilisateurs ont plus de 10 ans ?", allAbove10);

// exercice 5.3 - includes
const names = users.map((u) => u.name);
console.log("Noms:", names);
console.log("Alice est présent ?", names.includes("Alice"));
console.log("Eve est présent ?", names.includes("Eve"));

// exercice 5.4 - flatMap
// permet d'aplatir les tableaux imbriqués
const usersWithHobbies = [
    { name: "Alice", hobbies: ["climbing", "yoga"] },
    { name: "Bob", hobbies: ["gaming"] },
    { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const allHobbies = usersWithHobbies.flatMap((user) => user.hobbies);
console.log("Tous les hobbies:", allHobbies);

// exercice 5.5 - sort et slice
// attention sort modifie le tableau donc on fait une copie avec ...
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const twoYoungest = sortedByAge.slice(0, 2);

console.log("Original (non modifié):", users);
console.log("Triés par âge:", sortedByAge);
console.log("Les 2 plus jeunes:", twoYoungest);


// partie bonus

type User = { name: string; age: number; country: string };

const data: User[] = [
    { name: "Alice", age: 25, country: "France" },
    { name: "Bob", age: 15, country: "France" },
    { name: "Charlie", age: 30, country: "Spain" },
    { name: "Diana", age: 22, country: "France" },
];

console.log("\n=== Approche étape par étape ===");

// 1. adultes francais
const frenchAdults = data.filter((user) => user.age >= 18 && user.country === "France");
console.log("1. Adultes français:", frenchAdults);

// 2. extraire les noms
const frenchAdultNames = frenchAdults.map((user) => user.name);
console.log("2. Leurs noms:", frenchAdultNames);

// 3. Trier par age décroissant
const sortedFrenchAdults = [...frenchAdults].sort((a, b) => b.age - a.age);
console.log("3. Triés par âge décroissant:", sortedFrenchAdults);

// 4. moyenne d'age
const averageAge = frenchAdults.reduce((acc, user) => acc + user.age, 0) / frenchAdults.length;
console.log("4. Moyenne d'âge des adultes français:", averageAge);

// version tout en un
console.log("\n=== Approche pipeline ===");

const pipeline = data
    .filter((user) => user.age >= 18 && user.country === "France")
    .sort((a, b) => b.age - a.age);

const avgAge = pipeline.reduce((acc, user) => acc + user.age, 0) / pipeline.length;

console.log("Adultes français triés:", pipeline.map((u) => u.name));
console.log("Moyenne d'âge:", avgAge);
