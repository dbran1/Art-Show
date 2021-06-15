class Result{
  constructor(n,w,l,t){
    this.result=0;
    this.results=[n,w,l,t];
    
  }
  show(){
    textSize(18)
    text(this.results[this.result],175,200);
  }
  update(n){
    this.result=n%4;
  }
}
