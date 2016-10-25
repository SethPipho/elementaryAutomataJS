window.onload = function()
{
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    //secondary canvas so hold drawing so entire drawing isn redrawn each frame
    drawing = document.createElement("canvas")
    drawingCtx = drawing.getContext("2d")

    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

    drawing.height = window.innerHeight
    drawing.width = window.innerWidth

    ctx.fillStyle = "rgba(230,230,230,1)"
    ctx.fillRect(0,0,canvas.width, canvas.height)
    
    
    
    numCells = 0;
    arr = []

    var gui = new dat.GUI()
    gui.add(settings, "rule", 0,255,1).onFinishChange(function(value){settings.change()})
    gui.add(settings, "intialState", ["random","single"]).onFinishChange(function(value){settings.change()})
   
    settings.change()
    window.requestAnimationFrame(loop)

}

settings = {

    rule:22,
    intialState:"single",
    cellSize:2,

    change:function()
    {
       
       numCells = Math.floor(canvas.width / this.cellSize)
        for (var i = 0; i < numCells; i++)
        {
            if (this.intialState == "random"){
                arr[i] = Math.round(Math.random())
            }
            else{
                 arr[i] = 0
            }
         }
         //set middle cell to 1
         arr[Math.floor(numCells/2)] = 1
         rule = new Rule(this.rule)
    }
}


function loop()
{
        ctx.drawImage(canvas, 0, 0 - settings.cellSize, canvas.width, canvas.height)
        drawArray(arr,settings.cellSize);
        arr = rule.iterate(arr)

        window.requestAnimationFrame(loop)
}

function drawArray(arr, cellSize)
{
   
    for (var i = 0; i < arr.length; i++)
    {
        if (arr[i] == 0) { ctx.fillStyle = "rgba(230,230,230,1)" }
        else { ctx.fillStyle = "rgba(50,50,50,1)"}
        
        ctx.fillRect(i * cellSize, canvas.height - cellSize, cellSize, cellSize)
    }
}

