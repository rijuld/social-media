///////////load the content of DOM
document.addEventListener('DOMContentLoaded',function(){
	 document.querySelector('#compose-form').onsubmit = ()=>{
    
    const body= document.querySelector('#compose-body').value;
    //endpoint for post
    fetch('/compos', {
  method: 'POST',
  body: JSON.stringify({
      body: body
  })
})
.then(response => response.json())
.then(result => {
    // Print result
    location.reload(true);
    console.log(result);
});
return false;
  }
  var no = document.getElementById("paged").textContent;
  var usern  = document.getElementById("usern").textContent;
  fetch(`new?page=${no}`)
    .then (response =>response.json())
    .then(poss=>{
      console.log(poss);
      poss.forEach((post)=>{

        var element =document.createElement('div');
        if(usern== post.sender){
          element.innerHTML=`${post.sender} at ${post.timestamp}<br>     ${post.body}<br><i class="material-icons " id="like${post.id}">favorite</i> ${post.like}<br>
          <button type="button" class="btn btn-outline-primary" id="button${post.id}">Edit</button>`;
          }
          else{
           element.innerHTML=`${post.sender} at ${post.timestamp}<br>     ${post.body}<br><i class="material-icons " id="like${post.id}">favorite</i> ${post.like}<br>`;
          }

        children = element.children[1]; 
        element.style.backgroundColor = "#FFFFFF";
        element.style.padding="25px";
        element.style.border="thick solid #000000";
        var lkb = document.getElementById(`like${post.id}`);
        element.addEventListener('click', function() {
                      console.log("This element has been clicked")
                        var l=vview(post,element);
                        
                      
                  });
        var x = document.getElementById("poss");
        x.appendChild(element);
      });
    });
  function vview(post,element){ 
    const b=post.id;
      fetch(`/like/${b}`, {
  method: 'POST',
  body: JSON.stringify({
  })
})
.then(response => response.json())
.then(result => {
    // Print result
    
    console.log(result);
    if(usern== post.sender){
      element.innerHTML=`${post.sender} at ${post.timestamp}<br>     ${post.body}<br><i class="material-icons " id="like${post.id}">favorite</i> ${post.like}<br>
      <button type="button" class="btn btn-outline-primary">Edit</button>`;
      }
      else{
       element.innerHTML=`${post.sender} at ${post.timestamp}<br>     ${post.body}<br><i class="material-icons " id="like${post.id}">favorite</i> ${post.like}<br>`;
      }
});
 
}
});
