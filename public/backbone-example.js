(function() {

  var Animal = Backbone.Model.extend({
    url: function() {
      var urlString = '/api/animal';

      if (this.has('id')) {
        urlString += '/' + encodeURIComponent(this.id);
      }

      return urlString;
    }
  });

  var AnimalCollection = Backbone.Model.extend({
    url: '/api/animal/'
  });

  var buttonCollectionGet = document.querySelector('#backbone-collection-get');
  var buttonGet = document.querySelector('#backbone-get');
  var buttonPost = document.querySelector('#backbone-post');
  var buttonPut = document.querySelector('#backbone-put');
  var buttonDelete = document.querySelector('#backbone-delete');

  buttonCollectionGet.addEventListener('click', function() {
    var animalCollection = new AnimalCollection();

    console.log('before sync', animalCollection.toJSON());
    animalCollection.on('sync', function() {
      console.log('after fetch', animalCollection.toJSON());
    });

    animalCollection.fetch();
  });

  buttonGet.addEventListener('click', function() {
    var animal = new Animal();
    animal.set('id', 8);

    console.log('before fetch', animal.toJSON());
    animal.on('sync', function() {
      console.log('after fetch', this.toJSON());
    });

    animal.fetch();
  });

  buttonPost.addEventListener('click', function() {
    var animal = new Animal();
    animal.set('name', 'Fido');
    animal.set('type', 'Dog');

    console.log('before save', animal.toJSON());
    animal.on('sync', function() {
      console.log('after save', this.toJSON());
    });

    animal.save();
  });

  buttonPut.addEventListener('click', function() {
    var animal = new Animal();
    animal.set('id', 7);
    animal.set('name', 'Fido');
    animal.set('type', 'Dog');

    console.log('before save', animal.toJSON());
    animal.on('sync', function() {
      //Interestingly doens't fire
      console.log('after save', this.toJSON());
    });

    animal.save();
  });

  buttonDelete.addEventListener('click', function() {
    var animal = new Animal();
    animal.set('id', 7);

    console.log('before delete', animal.toJSON());
    animal.on('sync', function() {
      //Interestingly doens't fire
      console.log('after delete', this.toJSON());
    });

    animal.destroy();
  });



})();
