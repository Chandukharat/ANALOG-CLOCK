setInterval(()=>{var d = new Date();
ht=d.getHours();
mt=d.getMinutes();
st=d.getSeconds();

hrotate=30*ht+mt/2;
mrotate=6*mt;
srotate=6*st;

hour.style.transform=`rotate(${hrotate}deg)`
minute.style.transform=`rotate(${mrotate}deg)`
second.style.transform=`rotate(${srotate}deg)`

},1000)