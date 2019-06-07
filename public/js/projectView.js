class ProjectView{
    constructor(containerElement,closeBtnClickCallBack){
        this.containerElement=containerElement;
        this.closeBtnClickCallBack=closeBtnClickCallBack;
        //bind function
        this.show=this.show.bind(this);
        this.hide=this.hide.bind(this);
        this.update=this.update.bind(this);
        this.closeBtnClick=this.closeBtnClick.bind(this);
        //close button
        this.closeBtn=containerElement.querySelector(".modal-close");
        this.closeBtn.addEventListener('click',this.closeBtnClick);
        //element
        this.title=this.containerElement.querySelector("#title");
        this.duration=this.containerElement.querySelector("#duration");
        this.tools=this.containerElement.querySelector("#tools");
        this.challenges=this.containerElement.querySelector("#challenges");
        this.output=this.containerElement.querySelector("#output");
        this.target=this.containerElement.querySelector("#target");
        this.pImg=this.containerElement.querySelector("#pImg");
    }
    show(){
        window.scrollTo(0, 0);
        this.containerElement.classList.remove("hidden");
        this.containerElement.classList.add("show");
    }
    hide(){
        this.containerElement.classList.add('hidden');
    }
    closeBtnClick(){
        this.closeBtnClickCallBack();
    }
    update(json){
        console.log(json);
        this.title.innerHTML=json.title;
        this.duration.innerHTML=json.duration;
        this.tools.innerHTML=json.tools;
        this.challenges.innerHTML=json.challenges;
        this.output.innerHTML=json.output;
        this.target.innerHTML=json.target;
        this.pImg.src= json.img ;
    }
}