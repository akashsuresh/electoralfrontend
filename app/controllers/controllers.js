/**
 * Created by Akash on 21/07/17.
 */
'use strict';

(function () {

    function ElectoralController($scope,$routeParams,electoralProvider){

        $scope.pcname = $routeParams.pcname;
        console.log($scope.pcname);

        electoralProvider.getElectoral().then(function OnSuccess(response) {
            $scope.name = response.data.name;
            $scope.showing = response.data.showing;
            $scope.seats = d3.nest()
                .key(function(d) { return d.election_year; })
                .entries(response.data.seats);
            console.log($scope.seats);
            $scope.voteshare = response.data.voteshare;
            $scope.datapoints =[{'Safe':response.data.segmentation.safe},
                {'Battleground':response.data.segmentation.battleground},
                {'Fight':response.data.segmentation.fight},
                {'No Scope':response.data.segmentation.noscope}

            ];
            $scope.datacolumns=[
                {"id":"Safe","color":"green","type":"pie"},
                {"id":"Battleground","color":"orange","type":"pie"},
                {"id":"Fight", "color":"yellow","type":"pie"},
                {"id":"No Scope", "color":"red","type":"pie"}
            ];
            $scope.notes = response.data.notes;
            $scope.geojson = response.data.geojson;

    }, function OnError(response) {

            return response.data;

            });

    };

    electoralApp.controller('ElectoralController',ElectoralController);


})();