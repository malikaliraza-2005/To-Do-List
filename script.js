  const inputBox = document.getElementById('input-box');
    const listContainer = document.querySelector('.list-container');
    const addbtn = document.querySelector('.add-btn');

    addbtn.addEventListener("click", addtext);

    function addtext() {
      if (inputBox.value === '') {
        alert("You must write something!");
      } else {
        let li= document.createElement("li");   

        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML-"\u00d7";
        span.textContent="❌"
        li.appendChild(span);

            li.addEventListener("click", function () {
          li.classList.toggle("checked");
          
        });
         span.addEventListener("click", function (e) {
          e.stopPropagation();
          li.remove();
           }
        )}
    }
    
    