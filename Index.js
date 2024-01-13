let unLit
let bulb
let bulb1 = document.getElementById("bulb1")
setInterval(() => {
  unLit = document.body.getElementsByClassName("bulb")[0]
  bulb = document.getElementById("bulb")


  unLit.onclick = () => {
    unLit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="goldenrod" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
  </svg>`
    document.body.style.background = "url(https://media.istockphoto.com/id/861980226/photo/vintage-style-living-room.jpg?s=612x612&w=0&k=20&c=UUVXNK_TmLAHxzTb-qy6BcuWVcSKPvGTqmBinr_aS4c=)";
    unLit.setAttribute("id", "bulb1")
    function removeElementByTagName(tagName) {
      var elements = document.getElementsByTagName(tagName);
      for (var index = elements.length - 1; index >= 0; index--) {
        elements[index].parentNode.removeChild(elements[index]);
      }
    }
    removeElementByTagName("style")
  }
}, 500);
let a = setInterval(() => {
  let bulb1 = document.getElementById("bulb1")
  console.log(bulb1)


  console.log(bulb1)
  if (bulb1 != null) {
    bulb1.onclick = () => {
      console.log(bulb1)
      bulb1.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="rgb(80, 107, 130)" class="bi bi-lightbulb" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
              </svg>`
      bulb1.setAttribute("id", "bulb")
      document.body.style.background = "url(https://media.istockphoto.com/id/861980226/photo/vintage-style-living-room.jpg?s=612x612&w=0&k=20&c=UUVXNK_TmLAHxzTb-qy6BcuWVcSKPvGTqmBinr_aS4c=)"
      document.body.innerHTML = document.body.innerHTML + "<style> #body{ backdrop-filter:brightness(20%)} <style/>"
    }
  }
}, 500)
