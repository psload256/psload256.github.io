function enlargeImage(id)
{
    const image = document.getElementById(id);
    const background = document.querySelector('.overlay');

    let isEnlarged = false;

    image.addEventListener('click', () => {
        if (isEnlarged) {
            image.style.transform = 'scale(1)';
            background.style.display = 'none';
            image.style.zIndex = '0';
        } else {
            image.style.transform = 'scale(2.2)';
            background.style.display = 'block';
            image.style.zIndex = '1';
        }

        isEnlarged = !isEnlarged;
    });
}