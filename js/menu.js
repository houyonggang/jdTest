class Menu{
    constructor(id){
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.subMenuEles = this.box.querySelectorAll(".sub-menu")

        this.init()
    }

    init(){
        console.log("menu")
        
    }

}