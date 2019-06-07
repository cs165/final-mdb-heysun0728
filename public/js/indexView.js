class IndexView {
    constructor(containerElement,projClickCallBack) {
        //bind and initiallize
        this.containerElement=containerElement;
        this.projClickCallBack=projClickCallBack;
        this.getProjData=this.getProjData.bind(this);
        this.hide=this.hide.bind(this);
        this.show=this.show.bind(this);
        this.projClick=this.projClick.bind(this);
        this.createBtnClick=this.createBtnClick.bind(this);
        //projs 
        this.getProjData();
        //create proj view
        this.createView=new CreateProjView(document.querySelector("#createView"));

        //element
        this.createBtn=this.containerElement.querySelector("#createBtn");
        this.createBtn.addEventListener('click',this.createBtnClick)
    }
    async getProjData(){
        //get data of collection projects
        const result = await fetch('/project');
        const json = await result.json();

        //create project image
        const projsElement=this.containerElement.querySelector("#projects");
        for(let i in json){
            new Project(projsElement,json[i],this.projClick);
        }
    }
    projClick(json){
        this.projClickCallBack(json);
    }
    hide(){
        this.containerElement.classList.add('hidden');
    }
    show(){
        this.containerElement.classList.remove('hidden');
    }
    createBtnClick(){
        this.createView.show();
    }
}