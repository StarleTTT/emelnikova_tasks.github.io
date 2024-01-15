var moveObjects = document.querySelectorAll(".move");
var moveObjects = document.querySelectorAll(".move");
var rotateObjects = document.querySelectorAll(".rotate");
var startPos = document.querySelectorAll(".rotate");
var angles = {
    elem1: 45,
    elem2: 45,
    elem3: 135,
    elem4: 90
};
var f1 = false;
var f2 = false;
startPos.forEach(function(obj) {

        var id = obj.id;
        obj.style.transform = 'rotate(' + angles[id] + 'deg)';

});


moveObjects.forEach(function(obj) {
    var isDragging = false;
    var offset = { x: 0, y: 0 };
    var content = document.querySelector(".content"); 
    function startDragging(e) {
        isDragging = true;
        obj.style.cursor = "grabbing";
        offset.x = e.clientX - obj.getBoundingClientRect().left;
        offset.y = e.clientY - obj.getBoundingClientRect().top;
    }

    function stopDragging() {
        isDragging = false;
        obj.style.cursor = "grab";
        checkPos();
        console.log(f1,f2);
        ;
    }

    function drag(e) {
        if (isDragging) {
            var newX = e.clientX - offset.x;
            var newY = e.clientY - offset.y;
            newX = Math.max(0, Math.min(newX, content.getBoundingClientRect().left + content.offsetWidth - obj.offsetWidth)- content.getBoundingClientRect().left);
            newY = Math.max(0, Math.min(newY, content.getBoundingClientRect().top +content.offsetHeight - obj.offsetHeight) - content.getBoundingClientRect().top);
            obj.style.left = newX + "px";
            obj.style.top = newY + "px";
        }
    }

    obj.addEventListener('mousedown', startDragging);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', drag);
});

rotateObjects.forEach(function(obj) {
    obj.addEventListener('dblclick', function() {
        var id = obj.id;
        angles[id] += 45;
        if ( angles[id] >= 360) {angles[id] = angles[id]%360}
        obj.style.transform = 'rotate(' + angles[id] + 'deg)';
        checkRot(angles);
        console.log(f1,f2);
            });
    
    
});



function checkPos(){
let element1 = document.getElementById('elem1');
let element2 = document.getElementById('elem2');
let element3 = document.getElementById('elem3');
let element4 = document.getElementById('elem4');
let red = element1.getBoundingClientRect();
let roof = element2.getBoundingClientRect();
let window = element3.getBoundingClientRect();
let pipe = element4.getBoundingClientRect();

    if (Math.abs(roof.bottom - red.top ) < 25 &&
     Math.abs(roof.width/2+roof.left) - (red.width/2+red.left) < 25
     && Math.abs(pipe.bottom - roof.bottom ) < 25 &&  Math.abs(pipe.right - roof.right ) < 25
     && Math.abs(Math.abs(red.width/2+red.left) - (window.width/2+window.left)) < 25
     && Math.abs(Math.abs(red.width/2+red.top) - (window.width/2+window.top)) < 25
     ) 
      {
        f1 = true; checkEnd()
    }
    else { f1 = false; checkEnd()
     //   elem3.style.background = "cornflowerblue";
    }
}

function checkRot(angles) {
if (angles.elem1 % 90 == 0  && angles.elem2 == 180 && angles.elem3% 90 == 0 && angles.elem4==90)
{f2 = true;  checkEnd()}
else {
    f2 = false; checkEnd()
 //   elem3.style.background = "cornflowerblue";
    }
}
function checkEnd() {
if (f2==true && f1 == true)
{   
    animation()

}
else {
    let elem3 = document.getElementById('elem3');
    elem3.style.background = "cornflowerblue"
    let bubble = document.getElementById('bubble');
    bubble.style.display = "none"}
console.log(f1,f2);
}

function animation() {
    let elem3 = document.getElementById('elem3');
    var content = document.querySelector(".content"); 
    elem3.style.background = "yellow";
    let elem4 = document.getElementById('elem4');
    let bubble = document.getElementById('bubble');
    bubble.style.top =  elem4.getBoundingClientRect().top -  content.getBoundingClientRect().top - 20+'px'
    bubble.style.left = elem4.getBoundingClientRect().left - content.getBoundingClientRect().left +'px'
      bubble.style.display = "block";
}
