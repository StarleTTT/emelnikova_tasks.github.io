var moveObjects = document.querySelectorAll(".move");

moveObjects.forEach(function(obj){
    var isDragging = false;
    var offset = { x: 0, y: 0 };

    function startDragging(e) {
        isDragging = true;
        obj.style.cursor = "grabbing";
        offset.x = e.clientX - obj.getBoundingClientRect().left;
        offset.y = e.clientY - obj.getBoundingClientRect().top;
    }

    function stopDragging() {
        isDragging = false;
        obj.style.cursor = "grab";
    }

    function drag(e) {
        if (isDragging) {
            obj.style.left = e.pageX - offset.x + "px";
            obj.style.top = e.pageY - offset.y + "px";
        }
    }

    obj.addEventListener('mousedown', startDragging);
    document.addEventListener('mouseup', stopDragging);
    document.addEventListener('mousemove', drag);
});
