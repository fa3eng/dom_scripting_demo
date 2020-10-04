function showPic(whicPic) {


    if (!document.getElementById('placeholder')) return false;

    // get imag href
    let imagHref = whicPic.getAttribute('href');

    // get placeholder

    let imagPlaceholder = document.getElementById('placeholder');



    // set placeholder 
    imagPlaceholder.setAttribute('src', imagHref);

    // if here not have description, this part will not run
    if (document.getElementById('description')) {

        // set image title
        //1. get title
        // 1.1 judge imagTitle state
        let imagTitle = whicPic.getAttribute('title') ?
            whicPic.getAttribute('title') : '';

        //2. get placeholder_title
        let placeholderTilte = document.getElementById('description');

        //3. set title
        placeholderTilte.firstChild.nodeValue = imagTitle;

    }

    return true;

}


function prepareGallery() {

    let gallery = document.getElementById('imagegallery');
    let link_arr = gallery.getElementsByTagName('a');

    // traverse link_arr
    for (let i = 0; i < link_arr.length; i++) {

        link_arr[i].onclick = function () {

            // If there is an error in the showPic function, return true---return to the default behavior of onclick
            if (!showPic(this)) {
                return true;
            } else {
                return false;
            }

        }
    }

}

/* <img id="placeholder" src="img/placeholder.gif" alt="my img gallery">

<p id="description"> Choose on image.</p> */

function preparePlaceHolder() {

    let body = document.getElementsByTagName('body')[0];

    let placeHoler_img = document.createElement('img');

    placeHoler_img.setAttribute('id', 'placeholder');
    placeHoler_img.setAttribute('src', 'img/placeholder.gif');
    placeHoler_img.setAttribute('alt', 'my img gallery');

    // 将新插入的元素节点添加在前面
    // body.appendChild(placeHoler_img);
    let imageGallery = document.getElementById('imagegallery');

    imageGallery.parentElement.insertBefore(placeHoler_img, imageGallery);


    let description_p = document.createElement('p');
    description_p.setAttribute('id', 'description');


    // 将新插入的元素节点添加在图片之前
    // body.appendChild(description_p);
    imageGallery.parentElement.insertBefore(description_p, imageGallery);


    let description_text = document.createTextNode(' Choose on image.');



    description_p.appendChild(description_text);

}

prepareGallery();
preparePlaceHolder();