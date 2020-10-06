window.addEventListener('DOMContentLoaded', e => {
    fetch('/kitten/image')
        .then(res => res.json())
        .then(data => document.querySelector('img').src = data.src); 
        
    document.getElementById('new-pic').addEventListener('click', handleClick);
});

const handleClick = () => {
    document.querySelector(".loader").innerHTML = "Loading..."
    fetch(`/kitten/image`)
        .then(res => res.json())
        .then(json => {
            document.querySelector('img').src = json.src; 
            document.querySelector(".loader").innerHTML = "";
        });
}; 
  