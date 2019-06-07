class Project{
    constructor(containerElement,json,projClickCallBack){
        this.containerElement=containerElement;
        this.projClickCallBack=projClickCallBack;
        this.json=json;
        //bind function
        this.createProjImg=this.createProjImg.bind(this);
        this.projClick=this.projClick.bind(this);
        //create project 
        this.createProjImg();
    }
    createProjImg(){
        this.img=document.createElement("div");
        this.img.classList.add('projItem');
        this.img.style.backgroundImage="url('"+this.json.img+"')";
        this.img.addEventListener('click',this.projClick);
        this.containerElement.appendChild(this.img);
    }
    projClick(){
        console.log("proj click");
        this.projClickCallBack(this.json);
    }
}