//The player2 object
class Player2{
  constructor(n,r,p,s){
    this.choice=0;
    this.images=[n,r,p,s];
    this.throw= false;
    
  }
  //Shows images
  show(){
    image(this.images[this.choice], 240, 170, 60, 60);
  }
  //Updated image
  update(n){
    this.choice=n%4;
  }
}
