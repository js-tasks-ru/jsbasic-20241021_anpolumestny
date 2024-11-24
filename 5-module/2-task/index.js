function toggleText() {
  let botton = document.querySelector('.toggle-text-button');
  botton.addEventListener('click', function(event){
    let textElement = document.getElementById('text');
    textElement.hidden = !textElement.hidden;
  });
}
