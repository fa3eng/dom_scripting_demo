function stripeTables() {

    let table_tag = document.getElementsByTagName('table');

    for (let i = 0; i < table_tag.length; i++) {

        let odd = false;
        let rows = table_tag[i].getElementsByTagName('tr');

        for (let j = 0; j < rows.length; j++) {

            if (!odd) {
                odd = true;
                continue;
            }

            odd = false;
            rows[j].style.backgroundColor = '#ffc';

        }

    }

}

/**
 * 显示文档中的abbr将其添加在dom树中
 * @function
 */
function displayAbbr() {

    // traverse document contain abbr attribute and save value
    let abbr = document.getElementsByTagName('abbr');

    // check if there is a abbr label
    if (!abbr) return false;

    let abbrTitle = new Array();
    let abbrText = new Array();

    for (let i = 0; i < abbr.length; i++) {

        // save abbr title attribute
        abbrTitle[i] = abbr[i].getAttribute('title');
        abbrText[i] = abbr[i].firstChild.nodeValue;

    }

    // create a description list element 
    let abbrDlist = document.createElement('dl');

    // traverse abbr
    for (let i = 0; i < abbr.length; i++) {

        // create a description term and set nodeValue
        let abbrDterm = document.createElement('dd');
        let abbrDterm_text = document.createTextNode(abbrTitle[i]);
        abbrDterm.appendChild(abbrDterm_text);

        // create a description details
        let abbrDetails = document.createElement('dt');
        let abbrDetails_text = document.createTextNode(abbrText[i]);
        abbrDetails.appendChild(abbrDetails_text);

        // append node 
        abbrDlist.appendChild(abbrDetails);
        abbrDlist.appendChild(abbrDterm);

    }

    let article = document.getElementsByTagName('article')[0];

    // create head tag and append head to dom
    let head = document.createElement('h2');
    let head_text = document.createTextNode('Abbreviations');
    head.appendChild(head_text);

    article.appendChild(head);

    // append description list to dom
    article.appendChild(abbrDlist);

}

/**
 * 
 * 
 * @function 
 */
function hightLightRow() {

    let rows = document.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {

        let width_px = rows[i].offsetWidth + 'px';


        rows[i].onmouseover = function () {
            console.log(width_px);
            this.style.fontWeight = 'bold';
            console.log(rows[i].childNodes.map);
            rows[i].childNodes[0] = width_px;
        }

        rows[i].onmouseout = function () {
            console.log(width_px);
            this.style.fontWeight = 'normal';
            this.style['width'] = width_px;
        }

    }

}

stripeTables();
displayAbbr();
hightLightRow();