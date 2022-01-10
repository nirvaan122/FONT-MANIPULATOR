function setup(){
    Video=createCapture(VIDEO)
    Video.size(500,500)
    canvas=createCanvas(500,500)
    canvas.position(550,100)
    posenet=ml5.poseNet(Video,modelLoaded)
    posenet.on("pose",gotPoses)
  
    }
    function draw(){
    background("orange")
    }
    function modelLoaded(){
        console.log("posenet is loaded")
    }
    function gotPoses(results){ 
        if (results.length>0) {
            console.log(results)    
        }
    }