class FigurasGeometricas {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  // Encapsulation
  class Triangulo extends FigurasGeometricas {
    // constructor(base, altura) {
    //   super(base, altura);
    // }
    area(){
        return console.log("El area de el triangulo es: "+ this.base*this.altura/2);
    }
  }
  
  class Cuadrado extends FigurasGeometricas {
    constructor(base) {
      super(base);
    }
    area(){
        return console.log(`El area de un cuadrado de lado ${this.base}: `+ this.base*this.base);
    }
  }

  class Rectangulo extends FigurasGeometricas {
    // constructor(base, altura) {
    //   super(base, altura);
    // }
    area(){
        return console.log(`El area de un rectangulo de lago ${this.base} y altura ${this.altura}: `+ this.base*this.altura);
    }
  }

  let triangulo1 = new Triangulo(2, 2);
  let cuadrado1 = new Cuadrado(2);
  let rectangulo1 = new Rectangulo(2, 4);

  triangulo1.area();
  cuadrado1.area();
  rectangulo1.area();