
function newImg(assetpath, left, bottom) {
    let object = document.createElement('img')
    object.src = assetpath
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

newImg('assets/green-character.gif', 100, 100)
newImg('assets/pine-tree.png', 450, 200)
newImg('assets/tree.png', 200, 300)
newImg('assets/pillar.png', 350, 100)
newImg('assets/crate.png', 150, 200)
newImg('assets/well.png', 500, 425)

function newItem(url, left, bottom){
    let object = newImg(url, left, bottom)

    object.addEventListener('dblclick', () => {
            object.remove()
        })
}

newItem('assets/sword.png', 500, 405)
newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)
