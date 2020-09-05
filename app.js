//vamos a crear una clase en la que vamos a definir unos metodos

class UI{
    addCard(producto) {
        //creamos una carta en la que se muestran los valores 
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center my-2" >
           <div class="card-body" >
              <strong>Product name</strong>:${producto.name}
              <strong>Product price</strong>:${producto.product_price}
              <strong>Product year</strong>:${producto.product_year}
              <a href="#" class="btn btn-danger" name="delete" >Delete</a>
           </div>
        </div>
        `;
        //vamos a situar esta carta
        const lista = document.querySelector('#product_list');
        lista.appendChild(element);
    };

    resetForm()  {
       document.querySelector('#formulario').reset();
    };

    deleteCard(element) {
       if(element.name === 'delete'){
          element.parentElement.parentElement.parentElement.remove();
       };
    };

    showMessage(message , cssClass) {
       const div = document.createElement('div');
       div.appendChild(document.createTextNode(message));
       div.className = `alert alert-`+ cssClass;
       const container = document.getElementById('container');
       const row = document.getElementById('row');
       container.insertBefore(div , row);

       setTimeout(() => {
           div.remove();
       }, 3000);

    };
};

//vamos a construir un nuevo formulario

class PRODUCTO{
    constructor(nombre , precio , año){
        this.name = nombre ;
        this.product_price = precio;
        this.product_year = año;
    };
};

//vamos a llamar unos eventos y a estos vamos a aplicarles uno de los metodos definidos anteriormente

document.querySelector('#formulario').addEventListener('submit',function(e) {

   const nombre = document.querySelector('#name').value;
   const precio = document.querySelector('#product_price').value;
   const año = document.querySelector('#product_year').value;

   const producto = new PRODUCTO(nombre ,precio , año);

   

   const ui = new UI();
   if(nombre === '' || precio === '' || año === ''){
      const ui = new UI();
      return ui.showMessage('Please complete all the fields','warning');
   };
   ui.showMessage('Product added successfully','success ');
   ui.addCard(producto);

   ui.resetForm();

   e.preventDefault();

}  );

//llamamos a el div que contiene la carta y le damos un evento click

document.querySelector('#product_list').addEventListener('click',function (e) {
   const ui = new UI();
   ui.deleteCard(e.target);
   ui.showMessage('Product deleted' ,'danger ');
});