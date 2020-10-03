let tag = document.getElementsByTagName('a');
let tag_length = tag.length;

for (let i = 0; i < tag_length; i++) {

    if (tag[i].getAttribute('class') == 'test') {

        tag[i].onclick = function () {

            window.open(this.getAttribute('href'), 'ppp', 'width = 320, height = 480');

            return false;

        }

    }
}