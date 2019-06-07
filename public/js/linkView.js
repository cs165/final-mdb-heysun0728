class LinkView{
    constructor(containerElement,linkClickCallBack){
        this.containerElement=containerElement;
        this.linkClickCallBack=linkClickCallBack;
        //bind function
        this.createLink=this.createLink.bind(this);
        this.hide=this.hide.bind(this);
        this.show=this.show.bind(this);
        //bind function
        this.createLinkElement=this.createLinkElement.bind(this);
        this.createLink();
    }
    async createLink(){
        //get links 
        console.log("createLink");
        const result = await fetch('/link');
        const json = await result.json();
        console.log(json);
        for(let i in json){
            this.createLinkElement(json[i]);
        }
    }
    createLinkElement(json){
        const a=document.createElement("a");
        const img=document.createElement("img");
        a.href=json.url;
        a.target="_blank";
        img.src="/image/menu/"+json.imgurl;
        a.appendChild(img);
        this.containerElement.appendChild(a);
    }
    hide(){
        this.containerElement.classList.add("hidden");
    }
    show(){
        this.containerElement.classList.remove("hidden");
    }
}