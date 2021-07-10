class Question {
    constructor(opt1,opt2,opt3,opt4){
       
        this.Title = createElement("h1")
        this.button1 = createButton(opt1)
        this.button2 = createButton(opt2)
        this.button3 = createButton(opt3)
        this.button4 = createButton(opt4)
        this.Question = createElement("h2")
        this.temp1=0;
        //this.Button = createButton("submit")
    }
    display (q1){
        this.Title.html("Personality Quiz")
        this.Title.position(200,400);
        this.Question.html(q1);
        this.Question.position(200,600);
        this.button1.position(150,700)
        this.button2.position(150,750)
        this.button3.position(150,800)
        this.button4.position(150,850)
        this.button1.mousePressed(()=>{
         this.temp1=this.temp1+1              
        })
        this.button1.mousePressed(()=>{
            this.temp1=this.temp1+1              
           })
           this.button2.mousePressed(()=>{
            this.temp1=this.temp1+1              
           })
           this.button3.mousePressed(()=>{
            this.temp1=this.temp1+1              
           })
           this.button4.mousePressed(()=>{
            this.temp1=this.temp1+1              
           })
    }

}