var animationsList = [
    { image: 'thumb1.jpg', html: 'RayCasting/index.html', title: 'Ray Casting' },
    { image: 'thumb1.jpg', html: 'Fireworks/index.html', title: 'Fireworks' },
];

function compareNamesAnimations(a, b){
    if(a.title > b.title){
        return 1;
    } else {
        return -1;
    }
}

animationsList = animationsList.sort(compareNamesAnimations);

function loadAnimation(animationFile) {
    const frame = document.getElementById('animation-frame');
    frame.src = animationFile;
}


function createAnimationOptions() {
    const ul = document.querySelector('.lateral-menu ul');
    animationsList.forEach(animation => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.onclick = () => {
            // Remove active class from all list items
            const listItems = document.querySelectorAll(".lateral-menu ul li a");
            listItems.forEach(item => item.classList.remove('active'));

            // Add active class to the clicked list item
            a.classList.add('active');

            loadAnimation(animation.html);
        }

        const img = document.createElement('img');
        img.src = `images/${animation.image}`;
        img.alt = animation.title;

        const span = document.createElement('span');
        span.textContent = animation.title;

        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        ul.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', createAnimationOptions);
