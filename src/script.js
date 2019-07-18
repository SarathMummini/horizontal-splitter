var dragging;
function startDragging(e) {
  dragging = true;
  window.addEventListener('mousemove', move);
}

function move(e) {
  var offSetLeft = document.querySelector('.splitter-container').offsetLeft;
  var totalWidth = document.querySelector('.splitter-container').offsetWidth;
  document.querySelector('.splitter-left').style.width = e.pageX - 2*offSetLeft + 'px';
  document.querySelector('.splitter-right').style.width = totalWidth - e.pageX - 2*offSetLeft + 'px';
}
document.querySelector('.splitter').addEventListener('mousedown', startDragging);
window.addEventListener('mouseup', function (e) {
  if (dragging) {
    console.log('mousemove')
    dragging = false;
    window.removeEventListener('mousemove', move);
  }
});
