let check = false;

// Storing all the cell elements in an array.
let cells = document.querySelectorAll(".cell");

// Attaching event handler to all the elements one by one.
cells.forEach(cell => {

    cell.addEventListener("click", function () {

      let cellImage = cell.querySelector("img");

      if(check === false)
      {
        cellImage.setAttribute("src", `zero.png`)
        check = true;
      }
      else
      {
        cellImage.setAttribute("src", `cross.png`)
        check = false;
      }

    } );
})




