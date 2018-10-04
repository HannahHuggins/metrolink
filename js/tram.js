function Tram(route, statingStation){
    this._route = route;
    this._currentStation = statingStation;
}
Tram.prototype = {
    getCurrentStation: function () {
        return this._currentStation;
    },
    drive: function () {
        var routeStations = this._route.getStations()
        var currentStationsIndex = routeStations.indexOf(this._currentStation)
        var nextStationIndex = currentStationsIndex + 1;

        if (nextStationIndex >= routeStations.length) {
            return 'End of the line!';
        }

        this._currentStation = routeStations[nextStationIndex];
        return 'Now arriving at: ' + this._currentStation.getName()
    }

}