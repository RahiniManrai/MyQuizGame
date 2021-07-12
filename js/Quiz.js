class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    this.element.hide();
    this.title.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();

    background("yellow")

    this.heading=createElement('h1')
    this.heading.html("RESULT")
     getContestantInfo()
     if(allContestants !== undefined){
     fill("blue")
     textSize(20)
     text("*NOTE: Contestant who got it right is highlighted in green", 130, 230)
     }
     
     for(var plr in allContestants){
     var correctAns="2",
     if(correctAns===allContestants[plr].answer){
       fill("green")
     }else{
       fill("red")
     }

     }
    
  }

}
