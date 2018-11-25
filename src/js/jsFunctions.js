window.onload = function () {
    var linkItems = document.getElementsByClassName('da-sidebar__link');
    var elementsWraper = document.getElementsByClassName('da-sidebar__nav');
    elementsWraper[0].onclick = function () {
        var target = event.target;
        if (!target.classList.contains('da-sidebar__link')) return;
        for (var i=0; i < linkItems.length; i++){
            linkItems[i].classList.remove('da-sidebar__active');
        }
        target.classList.add('da-sidebar__active');
    };
};