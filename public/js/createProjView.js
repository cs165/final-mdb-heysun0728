class CreateProjView{
    constructor(containerElement){
        this.containerElement=containerElement;
        //bind function
        this.show=this.show.bind(this);
        this.hide=this.hide.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        this.saveValuesFromInput=this.saveValuesFromInput.bind(this);
        //event
        this.containerElement.addEventListener('submit',this.onFormSubmit);
        this.cancelBtn=this.containerElement.querySelector("#cancelBtn");
        this.cancelBtn.addEventListener('click',this.hide);
    }
    show(){
        this.containerElement.classList.remove("hidden");
    }
    hide(){
        this.containerElement.classList.add('hidden');
    }
    async onFormSubmit(event) {
        event.preventDefault();

        const params=this.saveValuesFromInput();
        document.getElementById("createform").reset();

        const fetchOptions = {
            method: 'post',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        };
        const result = await fetch('/newproj', fetchOptions);
        const json = await result.json();

        location.reload();
    }

    saveValuesFromInput() {
        const params = {
            title: document.querySelector("#pTitle").value,
            img: document.querySelector("#pImg").value,
            duration: document.querySelector("#pDur").value,
            tools: document.querySelector("#pTool").value,
            challenges: document.querySelector("#pChall").value,
            output: document.querySelector("#pOut").value,
            target: document.querySelector("#pTar").value
        }
        return params;
    }
    
}