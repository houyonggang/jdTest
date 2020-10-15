class Slider {
    constructor(id) {
        this.box = document.querySelector(id)
        this.picBox = this.box.querySelector("ul")
        this.indexBox = this.box.querySelector(".index-box")
        this.sliderWidth = this.box.clientWidth
        this.index =1
        this.init()
    }

    init() {
        this.initPoint()
        this.copyPic()
        this.leftRight()
    }

    initPoint() {
        const num = this.picBox.children.length;
        let frg = document.createDocumentFragment();
        for (let i = 0; i < num; i++) {
            let li = document.createElement("li")
            li.setAttribute("data-index", i + 1)
            if (i == 0) li.className = "active"
            frg.appendChild(li)
        }
        this.indexBox.children[0].style.width = num * 10 * 2 + "px";
        this.indexBox.children[0].appendChild(frg)

        this.indexBox.children[0].addEventListener("click",(e)=>{
            let pointIndex = (e.target).getAttribute("data-index")
            this.index = pointIndex
        })
    }

    //使用辅助图实现轮播图无缝切换
    copyPic(){
        const first = this.picBox.firstElementChild.cloneNode(true)
        const last = this.picBox.lastElementChild.cloneNode(true)
        this.picBox.appendChild(first)
        this.picBox.insertBeefore(last,this.picBox.firstElementChild)

        this.picBox.style.width = this.sliderWidth * this.picBox.children.length +"px";
        this.picBox.style.left = -1 * this.sliderWidth +"px";
    }

    //移动距离
    move(offset){
        this.animate(offset)
        const num = this.indexBox.children[0].children.length
        for(let i =0;i<num;i++){
            this.indexBox.children[0].children[i].className = ""
        }
        this.indexBox.children[0].children[this.index-1].className = "active"
    }

    //移动动画
    animate(offset){

    }

    //左右移动监听
    leftRight(){

        this.box.querySelector(".left-box").addEventListener("click",()=>{
            this.move(this.sliderWidth)
        })

        this.box.querySelector(".right-box").addEventListener("click",()=>{
            this.move(-this.sliderWidth)
        })
    }

}