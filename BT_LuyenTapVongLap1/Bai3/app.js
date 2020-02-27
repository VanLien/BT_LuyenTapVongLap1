let f0,f1,fn;
f0=0;
f1=1;
fn=f1+f0;
for (i=0;i<20;i++){
    document.write(fn+"<br/>");
    fn=f0+f1;
    f0=f1;
    f1=fn;
}