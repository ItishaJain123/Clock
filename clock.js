// FOR HOUR ROTATION
// 12 hour = 360 degree;
// 1 hour = 360/12 =30 degree
// h hour = 30h degree
// 60 m = 30 degree
// 1 m = 1/2 degree
// for hour hand = (30 h + m/2) degree

// FOR MINUTE ROTATION
// 60 minute = 360 degree
//1 minute = 6 degree
// m minute = 6m degree

// FOR SECOND ROTATION
// 60 second = 360 degree
// 1 second = 6 degree
// s second = 6s degree

setInterval(() => {
    d =  new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);