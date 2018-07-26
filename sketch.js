var cx
var cy
var stars
var speed = 10000000

function setup() {
    createCanvas(windowWidth,windowHeight)
    cx = windowWidth/2
    cy = windowHeight/2
    stars = []
    for(var i=0;i<100;i++){
        stars.push(new star(random(windowWidth) - cx,random(windowHeight) - cy,random(5000000000)))
    }
}

function draw() {
    background(0)
    for(var i in stars){
        stars[i].go()
    }
}

function star(x,y,z){

    this.setup = function(x,y,z){
        this.x = x
        this.y = y
        this.z = z
        this.fx = (windowWidth + 2*z)*x
        this.fy = (windowHeight + 2*z)*y
    }

    this.setup(x,y,z)

    this.go = function(){
        this.z -= speed
        this.x = this.fx/(windowWidth + 2*(this.z))
        this.y = this.fy/(windowHeight + 2*(this.z))
        this.show()
        this.check()
    } 

    this.show = function(){
        ellipse(this.x + cx ,this.y + cy,10,10)
    }

    this.check = function(){
        if(this.z <= 0){
            this.setup(random(windowWidth) - cx,random(windowHeight) - cy,random(5000000000))
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
