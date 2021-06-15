//The player object (Just the images)
class Player1{
  constructor(n,r,p,s){
    this.choice=0;
    this.images=[n,r,p,s];
    
  }
  //show image
  show(){
    image(this.images[this.choice], 100, 170, 60, 60);
  }
  //update image
  update(n){
    this.choice=n%4;
  }
}
