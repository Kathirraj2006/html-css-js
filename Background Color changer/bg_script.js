let container=document.querySelector('#container');
    const colors=['yellow','green','blue','black','white','gray','red','brown','lightblue'];
function hit(){
    container.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)];
}