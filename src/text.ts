// // 1 number problem solve
// function formatValue(value: string | number | boolean): string | number | boolean {
//   if (typeof value === "string") {
//     return value.toUpperCase();
//   } else if (typeof value === "number") {
//     return value * 10;
//   } else {
//     return !value;
//   }
// }

// console.log(formatValue("hello")); // HELLO
// console.log(formatValue(5)); // 50
// console.log(formatValue(true)); // false

// 2 array problem solve
// function getLength(value: string | any[]): number {
//   if (typeof value === "string") {
//     return value.length;
//   } else if (Array.isArray(value)) {
//     return value.length;
//   }
//   return 0;
// }

// console.log(getLength("typescript")); // 10
// console.log(getLength([10, 20, 30, 40])); // 4


// // 3 object problem solve
// class Person {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   getDetails(): string {
//     return `'Name: ${this.name}, Age: ${this.age}'`;
//   }
// }

// const person1 = new Person("John Doe", 30);

// const person2 = new Person("Alice", 25);



// // 4 filter problem solve
// type Item = {
//   title: string;
//   rating: number;
// };

// function filterByRating(items: Item[]): Item[] {
//   return items.filter(item => item.rating >= 4);
// }

// const books = [
//   { title: "Book A", rating: 4.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 5.0 },
// ];

// console.log(filterByRating(books));

// // 5 user problem solve
// type User = {
//   id: number;
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function filterActiveUsers(users: User[]): User[] {
//   return users.filter(user => user.isActive === true);
// }

// const users = [
//   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
//   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
//   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true }
// ];

// console.log(filterActiveUsers(users));


// // 6 book problem solve
// interface Book {
//   title: string;
//   author: string;
//   publishedYear: number;
//   isAvailable: boolean;
// }

// function printBookDetails(book: Book): string {
//   const available = book.isAvailable ? "Yes" : "No";
//   return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`;
// }

// const myBook: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publishedYear: 1925,
//   isAvailable: true,
// };

// printBookDetails(myBook); // শুধু call, console.log করা যাবে না
//  console.log(printBookDetails(myBook));


// // 7 unique values problem solve
//  function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
//   const result: (string | number)[] = [];

//   function pushUnique(value: string | number) {
//     // manually check duplicate
//     let exists = false;
//     for (let i = 0; i < result.length; i++) {
//       if (result[i] === value) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) result.push(value);
//   }

//   for (let v of arr1) pushUnique(v);
//   for (let v of arr2) pushUnique(v);

//   return result;
// }

// console.log(getUniqueValues([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// // 8 total price problem solve

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  if (products.length === 0) return 0;

  return products
    .map(product => {
      let total = product.price * product.quantity;

      if (product.discount) {
        total = total - (total * product.discount) / 100;
      }

      return total;
    })
    .reduce((sum, value) => sum + value, 0);
}

const products = [
  { name: "Pen", price: 10, quantity: 2 },
  { name: "Notebook", price: 25, quantity: 3, discount: 10 },
  { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products)); // 127.5