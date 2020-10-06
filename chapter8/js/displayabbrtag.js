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

    let body = document.getElementsByTagName('body')[0];

    // create head tag and append head to dom
    let head = document.createElement('h2');
    let head_text = document.createTextNode('Abbreviations');
    head.appendChild(head_text);

    body.appendChild(head);

    // append description list to dom
    body.appendChild(abbrDlist);

}


function displayCitations() {

    // traverse element blockquote in this document and get cite value
    let blockquote = document.getElementsByTagName('blockquote');


    // check if there is a blockquote 
    if (!blockquote) return false;

    for (let i = 0; i < blockquote.length; i++) {

        if (!blockquote[i].getAttribute('cite')) continue;
        let cite = blockquote[i].getAttribute('cite');

        // get the last last element node
        let quoteChild = blockquote[i].getElementsByTagName('*');

        if (quoteChild.length < 1) continue;

        let last_quoteChild = quoteChild[quoteChild.length - 1];

        // create <a>, set textvalue and href
        let tag_a = document.createElement('a');
        tag_a.setAttribute('href', cite);

        let tag_a_text = document.createTextNode('source');
        tag_a.appendChild(tag_a_text);

        // append tag_a to the last element in blockquote
        last_quoteChild.appendChild(tag_a);

    }

}


displayAbbr();
displayCitations();