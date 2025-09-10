p=["Pritam","Avoy","Ritam"," "]
p11=p[Math.floor(Math.random()*p.length)]
p12=p[Math.floor(Math.random()*p.length)]
r1=p.filter(item=>!p11.includes(item))
if (p11==" "){
p13=p[Math.floor(Math.random()*r1.length)]
} else{
    p13=r1[Math.floor(Math.random()*r1.length)]
}

b1=document.getElementById("box1")
b2=document.getElementById("box2")
b3=document.getElementById("box3")
b4=document.getElementById("box4")
b5=document.getElementById("box5")
b6=document.getElementById("box6")
b7=document.getElementById("box7")
b8=document.getElementById("box8")
b9=document.getElementById("box9")
// bfb=document.getElementById("fbox") 
p21=p[Math.floor(Math.random()*p.length)]
p22=p[Math.floor(Math.random()*p.length)]
r2=p.filter(item=>!p21.includes(item))
if (p21==" "){
     p23=p[Math.floor(Math.random()*p.length)]
} else{
    p23=r2[Math.floor(Math.random()*r2.length)]
}
p31=p[Math.floor(Math.random()*p.length)]
p32=p[Math.floor(Math.random()*p.length)]
r3=p.filter(item=>!p31.includes(item))
if(p31==" "){
    p33=p[Math.floor(Math.random()*p.length)]       
} else{
p33=r3[Math.floor(Math.random()*r3.length)]
}
// b1.innerHTML=p11
// b2.innerHTML=p12
// b3.innerHTML=p13
// b4.innerHTML=p21
// b5.innerHTML=p22
// b6.innerHTML=p23
// b7.innerHTML=p31
// b8.innerHTML=p32
// b9.innerHTML=p33
q=[p11,p12,p13,p21,p22,p23,p31,p32,p33]
// bfb.innerHTML="All Students: "+q
pr=q.filter(item=>item=="Pritam").length
ri=q.filter(item=>item=="Ritam").length
av=q.filter(item=>item=="Avoy").length 
if(pr==2 && ri==2 && av==2){
     b1.innerHTML=p11
    b2.innerHTML=p12
    b3.innerHTML=p13
    b4.innerHTML=p21
     b5.innerHTML=p22
    b6.innerHTML=p23
    b7.innerHTML=p31
     b8.innerHTML=p32
    b9.innerHTML=p33
} else{
    location.reload()
}
