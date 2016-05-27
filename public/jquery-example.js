(function() {

  var buttonCollectionGet = document.querySelector('#jquery-collection-get');
  var buttonGet = document.querySelector('#jquery-get');
  var buttonPost = document.querySelector('#jquery-post');
  var buttonPut = document.querySelector('#jquery-put');
  var buttonDelete = document.querySelector('#jquery-delete');

  buttonCollectionGet.addEventListener('click', function() {

    var promise = $.ajax({
      url: '/api/animal'
    });

    promise.done(function(res) {
      console.log('GET result of /api/animal', res);
    });

    promise.error(function(err) {
      console.log('error', err.status);
    })
  });

  buttonGet.addEventListener('click', function() {

    var promise = $.ajax({
      url: '/api/animal/5'
    });

    promise.done(function(res) {
      console.log('GET result of /api/animal/5', res);
    });

  });

  buttonPost.addEventListener('click', function() {

    var animal = {
      name: 'Artaxerxes',
      type: 'Fish'
    };

    var promise = $.ajax({
      url: '/api/animal',
      method: 'POST',
      contentType: 'application/json',
      dataType: 'json',
      data: JSON.stringify(animal)
    })

    promise.done(function(res) {
      console.log('POST result', res);
    });
  });

  buttonPut.addEventListener('click', function() {

    var animal = {
      id: 42,
      name: 'Ford Prefect',
      type: 'Dog'
    };

    var promise = $.ajax({
      url: '/api/animal/' + animal.id,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify(animal)
    })

    promise.done(function(res) {
      console.log('PUT result', res);
    });
  });

  buttonDelete.addEventListener('click', function() {

    var animal = {
      id: 42,
      name: 'Ford Prefect',
      type: 'Dog'
    };

    var promise = $.ajax({
      url: '/api/animal/' + animal.id,
      method: 'DELETE'
    })

    promise.done(function(res) {
      console.log('DELETE result', res);
    });

  });



})();
