 OBJETOS:

¿Por qué se crean los objetos?

  Los objetos se crean para modelar cosas del mundo real que queremos representar en nuestros programas, y/o proveemos una simple manera para acceder a la funcionalidad que, de otra manera, sería difícil o imposible de usar.
  Los objetos pueden contener información y código relacionados, los cuales representan información acerca de lo que estás tratando de modelar, y la funcionalidad o comportamiento que deseas que tenga.

• ¿Qué hubiera pasado si agregaba otra propiedad?
  
   CLASS no es en realidad un objeto, en vez de esto es un modelo que define las características que un objeto debería tener.
   a partir de lo creado con CLASS podemos crear instancias de objetos — objetos que contienen los datos y funcionalidades definidas en la clase original. Teniendo a nuestra clase creada, podemos crear gente con características más específicas.

• ¿Se puede generar de otra manera algún objeto?

Otras maneras de generar objetos son:

   1.- El constructor Object()
       1.1Permite generar objetos aun si objetos genericos tienen un constructor que genere un objeto vacio.
           Estructura:
             var person1= new Object(); " Guardamos un objeto vacio en la variable person1."

        1.2 Podemos agregar propiedades y metodos al objeto usando la notacion (.) o corchetes []

           ejemplo:  person1.name = 'Chris';
                     person1['age'] = 38;

       1.3  Podemos pasar un objeto literal como parametro al constructor Object() para precargarlo con propiedades y metodos.
           Ejemplo:
            var person1 0 new Object({
                name: 'Chris',
                age: 38,
                greeting: function(){
                    alert('Hola! I\'m' + this.name + '.')
                }
            })   ;


       2.- El metodo Create ()    

                  Te permite crear un nuevo abjeto basado en cualquier otro objeto existente.     

                  Teniendo en cuenta el objeto anterior.

                  creamos el segundo objeto:
                      var person2 = Object.create(person1);

                      Una limitacion de este metodo es que no soporta el navegador IE8.
