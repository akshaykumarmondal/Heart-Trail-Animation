const body=document.querySelector('body');

body.addEventListener('mousemove',(event)=>{

    // console.log('moved');
    
    console.log(event.offsetX); //geting the x-axis

    console.log(event.offsetY); //getting the y-axis

    const xPosition=event.offsetX;
    const yPosition=event.offsetY;

    //Now every time we move our mouse we want to create  new span elements.

    const spanElement=document.createElement('span');

    spanElement.style.left=xPosition + "px";
    spanElement.style.top=yPosition + "px";

    //Now each time element is created it is created inside the body, so we need to append the span elements inside the body.

    // to change the size of the heart we can create a random number.

    const size=Math.floor(Math.random()*100);
    spanElement.style.width=size+"px";
    spanElement.style.height=size+"px";

    body.appendChild(spanElement);

    setTimeout(()=>{

        spanElement.remove();

    }, 3000);
})