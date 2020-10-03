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

}


function prepareGallery() {

    let gallery = document.getElementById('imagegallery');
    let link_arr = gallery.getElementsByTagName('a');

    // traverse link_arr
    for (let i = 0; i < link_arr.length; i++) {

        link_arr[i].onclick = function () {

            showPic(this);

            return false;
            // If there is an error in the showPic function, return true---return to the default behavior of onclick
            // return !showPic(this);
        }
    }

}

prepareGallery();