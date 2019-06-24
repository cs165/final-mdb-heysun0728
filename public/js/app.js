class App {
    constructor() {
        //bind function
        this.projClick=this.projClick.bind(this);
        this.closeBtnClick=this.closeBtnClick.bind(this);
        //links
        this.linkView=new LinkView(document.querySelector("#links"),this.linkClick);
        //index view
        this.indexView=new IndexView(document.querySelector("#index"),this.projClick);
        //project view
        this.projView=new ProjectView(document.querySelector("#projectView"),this.closeBtnClick)
    }
    projClick(json){
        this.linkView.hide();
        this.indexView.hide();
        this.projView.update(json);
        this.projView.show();
    }
    closeBtnClick(){
        this.projView.hide();
        this.linkView.show();
        this.indexView.show();
    }
}  


