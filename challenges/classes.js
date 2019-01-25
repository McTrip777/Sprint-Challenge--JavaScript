// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(attr){
    this.length = attr.length; 
    this.width = attr.width;
    this.height = attr.height;
  }
  volume(){
    return this.length * this.width * this.height;
  }
  area(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}
const cuboid = new CuboidMaker({
    length: 4, 
    width: 5,
    height: 5,
  });



// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.area()); // 130




// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(cubeAttr){
        super(cubeAttr)
    }
    cubeVolume(){
        return this.length * this.width * this.height;
      }
      cubeArea(){
        return this.length * this.width * 6;
      }
}

const cube = new CubeMaker({
    length: 4, 
    width: 4,
    height: 4,
  });

  console.log(cube.volume()); // 100
  console.log(cube.area()); // 130





/*
Questions 
  1. Describe the biggest difference between .forEach & .map.

        map and forEach both run through an array but map creates a new array 

  2. What is the difference between a function and a method?

       methods and functions are similar but methods are primarily used for objects and a method is used on objects on which it was called.
  
  3. What is closure?

        Closure revolves around the scope of a function and wether something is wrapped in a function or a nested function. closing it off from the rest of the program (local)
  
  4. Describe the four rules of the 'this' keyword.

        Window binding - is when (this) is referencing the browser
        Implicit binding - is when (this) is referencing the object that this is contained in
        Explicit binding - is when (this) is referencing a called object that is passed in
        New binding - is when (this) is referencing a new object that is created
    
  5. Why do we need super() in an extended class?

        super is what calls the attributes or elements from the parent class and allows them to be passed down.
  */
  
  