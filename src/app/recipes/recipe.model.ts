// Model is a blueprint for obj we create.
// create class
export class Recipe {
  // properties and type for the obj. Public so it's accessible
  public name: string;
  public description: string;
  public imagePath: string;

  // Constructor instatiates w/new keyword and pass args to constructor
  constructor(name: string, description: string, imagePath: string) {
    // assign args in ( ) to props of class
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
