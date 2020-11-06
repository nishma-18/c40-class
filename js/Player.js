class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){ //static: function static, the function is not unique, its common for all objects. without static, hv to call this function for every player, will be repetitive
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
   static getfinalDestination(){
    database.ref('finalDestination').on("value",(data)=>{
      this.rank=data.val();
    })
  }
   updatefinalDestination(prank){
    database.ref('/').update({
      finalDestination: prank
    })
  }
}
