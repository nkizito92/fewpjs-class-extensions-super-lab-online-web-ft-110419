// Write your classes here
class Tree {
  constructor(species) {
    this.species = species
  }
  
  static definition() {
<<<<<<< HEAD
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves." 
=======
    return "A tree is a perennial plant with an elongated stem, or trunk, supporting"
>>>>>>> e12312afe5a85d673807b13b9b18c77c6ab33d39
  }
}

class Deciduous extends Tree {
  constructor(name) {
    super(species);
    this.name = name;
  }
  
  static definition() {
    return Tree.definition() + "Deciduous trees shed their leaves annually."
  }
}