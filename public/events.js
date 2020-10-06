window.addEventListener('DOMContentLoaded', e => {
    fetch('/kitten/image')
        .then(res => res.json())
        .then(data => document.querySelector('img').src = data.src);       
});

// const handleClick = async () => {
//     const res = await fetch(`/name`);
//     const json = await res.json();
  
//     if (!res.ok) {
//       document.querySelector(`h5`).innerHTML = json.error;
//     } else {
//       document.querySelector(`h2`).innerHTML = json.name;
//     }
//   }
  