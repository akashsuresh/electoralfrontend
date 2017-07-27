'use strict';

(function(){

    function electoralProvider($http) {
    this.getElectoral = function () {
        return $http.get('http://localhost:3000/api/v1/map?mapof=India&showing=PCs&election=2014+GE&rural_urban=Rural');
    };

    this.postNotes = function () {
       return $http.post("http://localhost:3000/api/v1/note_mapping", {term: searchString}, {headers: {'Content-Type': 'application/json'} })
            .then(function (response) {
                return response;
            });
    }
};
    electoralApp.service('electoralProvider',electoralProvider);

})();

