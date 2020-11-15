const canvas = document.getElementById("jsCanvas");
const ctx =  canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document. getElementById("jsRange");
const mode = document. getElementById("jsMode");
const saveBtn = document. getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE; /* 픽셀을 다루는 윈도우의 사이즈가 얼마인지 canvas에게 알려줘야 한다. */
canvas.height = CANVAS_SIZE;

ctx.fillStyle ="white";
ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);

ctx.fillStyle = INITIAL_COLOR ;
ctx.strokeStyle = INITIAL_COLOR;  /* 우리가 그릴선이 모두 #2c2c2c색이라고 알려주는것  */
ctx.lineWidth = 2.5; /* 우리가 그릴선의 너비가 2.5px라는것 */


let painting = false; 
let filling = false;


function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    /* 마우스를 움직이는 모든 순간에 path를 만든다. */
    /* path의 시작점은 내 마우스가 있는 곳 */
    if(!painting) {
        ctx.beginPath();  /* 클릭하지 않고 canvas안에서 움직일때 path(선)를 시작한다. */
        ctx.moveTo(x,y);  /* path를 만들면 마우스의 x,y좌표로 path를 옮긴다. */
    } else{
        ctx.lineTo(x,y); /* path의 이전 위치와 이동후 위치와 연결된다. */
        ctx.stroke();
    }    
}

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    painting = false; 
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = ctx.strokeStyle;
}

function handelRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}

function handelModeClick() {
    if(filling === true){
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }

}

function handleCanvasClick() {
    if(filling){
       ctx.fillRect(0,0, CANVAS_SIZE, CANVAS_SIZE);
    }
}

function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "downloadimage";
    link.click();
}



if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove );
    canvas.addEventListener("mousedown", startPainting );
    canvas.addEventListener("mouseup", stopPainting );
    canvas.addEventListener("mouseleave", stopPainting );
    canvas.addEventListener("click", handleCanvasClick );
    canvas.addEventListener("contextmenu", handleCM );  
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handelRangeChange );
}

if(mode){
    mode.addEventListener("click", handelModeClick)
}

if(saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}