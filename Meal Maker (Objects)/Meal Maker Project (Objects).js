const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
        return this._courses.appetizers;
    },
    set appetizers(appertizerIn) {
        this._courses.appetizers = appertizerIn;
    },
    get mains() {
        return this._courses.mains;
    },
    set mains(mainsIn) {
        this._courses.mains = mainsIn
    },
    get desserts() {
        return this._courses.desserts;
    },
    set desserts(dessertsIn) {
        this._courses.desserts = dessertsIn;
    },
    get courses() {  //CANNOT NAME A GET THE SAME AS ANOTHER OBJECT INSIDE THE SAME SCOPE
        return this._courses;
    },
    addDishToCourse(courseName, dishName, dishPrice) {
        // Add an object to the _courses.courseName arrays
        const dish = {
            name: dishName,
            price: dishPrice
        };
        this._courses[courseName].push(dish)
    },
    getRandomDishCourse(courseName) {
        const dishes = this._courses[courseName];
        /* dishes = this._courses.appetizers
            result of the above is = [{
             name: dishName,
             price: dishPrice
            }] */
        const randomIndex = Math.floor(Math.random() * dishes.length);
        /* pick me a number between how many dishes there are
        for example if length of dishes is 3, random index will be 3 */

        return dishes[randomIndex];
        /* dishes[1]
             result = {
             name: dishName,
             price: dishPrice
            } */
    },
    generateRandomMeal() {
        const appetizer = this.getRandomDishCourse('appetizers');
        //const a = this._courses.appetizers[1]
        const main = this.getRandomDishCourse('mains');
        const dessert = this.getRandomDishCourse('desserts');
        const totalPrice = appetizer.price + main.price + dessert.price
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is £${totalPrice}.`
    }
  };

menu.addDishToCourse('appetizers', 'Chili Squid', 7);
menu.addDishToCourse('appetizers', 'Edamame Beans', 4);
menu.addDishToCourse('appetizers', 'Salad', 3);

menu.addDishToCourse('mains', 'Chicken Firecracker', 9);
menu.addDishToCourse('mains', 'Chicken Ramen', 10);
menu.addDishToCourse('mains', 'Teriyaki Soba', 9);
  
menu.addDishToCourse('desserts', 'Choco Fudge Cake', 4);
menu.addDishToCourse('desserts', 'Ice Cream', 3);
menu.addDishToCourse('desserts', 'Choco Fudge Cake and Ice Cream', 6); 


const myMeal = menu.generateRandomMeal();
console.log(myMeal);
