function Route(){
this._stations = []
}
Route.prototype ={
    addStation: function(Station){
        this._stations.push(Station)
    },
getStations: function (){
    return this._stations 
  }
}