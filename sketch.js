var cx
var cy
var stars
var speed = 10000000
var initdis = 5000000000
var density = 1000
function setup() {
    createCanvas(windowWidth,windowHeight)
    cx = windowWidth/2
    cy = windowHeight/2
    stars = []
    for(var i=0;i<density;i++){
        var star0 = new star()
        stars.push(star0)
        star0.setup(random(windowWidth) - cx,random(windowHeight) - cy,random(initdis),1)
    }
}

function draw() {
    background(0)
    for(var i in stars){
        stars[i].go()
    }
}

function star(){

    this.setup = function(x,y,z,s){
        this.x = x
        this.y = y
        this.z = z
        this.fx = (windowWidth + 2*z)*x
        this.fy = (windowHeight + 2*z)*y
        this.fs = (windowHeight + 2*initdis)*s
        this.s = this.fs/(windowHeight + 2*(this.z))
        
    }

    this.go = function(){
        this.z -= speed
        this.x = this.fx/(windowWidth + 2*(this.z))
        this.y = this.fy/(windowHeight + 2*(this.z))
        this.s = this.fs/(windowHeight + 2*(this.z))
        this.show()
        this.check()
    } 

    this.show = function(){
        ellipse(this.x + cx ,this.y + cy,this.s,this.s)
    }

    this.check = function(){
        if(this.z <= 0){
            this.setup(random(windowWidth) - cx,random(windowHeight) - cy,random(initdis/5,initdis),1)
        }
    }
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        speed += 10000000
    }else if(keyCode == DOWN_ARROW){
        speed -= 10000000
    }
}
