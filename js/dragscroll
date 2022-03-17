const list = document.querySelector('.movie-list');
let isDown = false;
let StartX, scrollLeft;

list.addEventListener('mousedown', (e) => {
    isDown = true;
    StartX = e.pageX - list.offsetLeft;
    scrollLeft = list.scrollLeft;
});
list.addEventListener('mouseleave', () => {
    isDown = false;
});
list.addEventListener('mouseup', () => {
    isDown = false;
});
list.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - list.offsetLeft;
    const walk = x - StartX;
    list.scrollLeft = scrollLeft - walk;
});


var bar = new ProgressBar.Circle('#rating', {
    strokeWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    color: '#f92b1e',
    trailColor: '#BDC3C7',
    trailWidth: 5,
    svgStyle: null
});

bar.setText('6.8');
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '0.9rem';
bar.text.style.color = '#ECF0F1';
bar.animate(0.68); // Number from 0.0 to 1.0