let imagezoom = document.getElementById('imagezoom')

imagezoom.addEventListener('mousemove', (event) => {
    imagezoom.style.setProperty('--display', 'block')

    let pointer = {
        x : (event.offsetX * 100) / imagezoom.offsetWidth,
        y : (event.offsetY * 100) / imagezoom.offsetHeight,
    }
    imagezoom.style.setProperty('--zoom-x', pointer.x + '%');
    imagezoom.style.setProperty('--zoom-y', pointer.y + '%')
    console.log(pointer)
})

imagezoom.addEventListener('mouseout', () =>{
    imagezoom.style.setProperty('--display', 'none');
})