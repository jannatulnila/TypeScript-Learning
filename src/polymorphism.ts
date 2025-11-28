//polymorphism: bohurupi

class Person {
    getSleep() {
        console.log(`I am a normal happy person.I sleep 8 Hours`);
    }
}

class Students extends Person {
    getSleep() {
        console.log(`I am a student .I sleep 7 Hours`);
    }
}
class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a developer .I sleep 6 Hours`);
    }
}

const getSleepHours = (param: Person) => {
    param.getSleep()
}

const person1 = new Person()
const person2 = new Students()
const person3 = new NextLevelDeveloper()

getSleepHours(person2)

class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape {
    //area = pi*r*r
    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }
    getArea(): number {
        return Math.PI * this.radius
    }
}

class Rectangle extends Shape {
    // area= height * width
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super()
        this.height = height,
            this.width = width
    }
    getArea(): number {
        return this.height * this.width
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea())
}

const shape1 = new Shape()
const shape2 = new Circle(10)
const shape3 = new Rectangle(5, 10)

getArea(shape3)