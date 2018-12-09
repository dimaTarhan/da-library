window.onload = function () {
    /*Select Sidebar Elements*/
    let linkItems = document.getElementsByClassName('da-sidebar__link');
    let elementsWraper = document.getElementsByClassName('da-sidebar__nav');
    elementsWraper[0].addEventListener("click", function () {
        let targetSidebar = event.target;
        if (!targetSidebar.classList.contains('da-sidebar__link')) return;
        //let dataName = targetSidebar.dataset.ident;
        //let searchElem = document.getElementById(dataName);
        //let bodyRect = document.body.getBoundingClientRect();
        //let elementRect = searchElem.getBoundingClientRect();
        //let rect = elementRect.top - bodyRect.top;
        for (let i=0; i < linkItems.length; i++){
            linkItems[i].classList.remove('da-sidebar__active');
        }
        targetSidebar.classList.add('da-sidebar__active');
        //window.scrollTo(0, rect - 80);

    });

    /*Tab Toolbar*/
    let getTabsToolbar = document.getElementById("da-tabs-toolbar");
    let getTabsToolbarNav = document.getElementsByClassName("da-tabs-toolbar__nav");
    getTabsToolbar.addEventListener('click', function () {
        for (let i = 0; i < getTabsToolbarNav.length; i++){
            if (getTabsToolbarNav[i].style.display === 'flex'){
                getTabsToolbarNav[i].style.display = "none";
            }
            else {
                getTabsToolbarNav[i].style.display = "flex";
            }
        }
    }, true);

    /*Style for selected elements*/
    selectedTab('da-tabs-default', 'da-tabs-default__link', 'da-tabs-default__link', 'da-tabs-default__selected');
    selectedTab('da-tabs-slider', 'da-tabs-slider__link', 'da-tabs-slider__link', 'da-tabs-slider__selected');
    selectedTabInky('da-tabs-inky', 'da-tabs-inky__link', 'rippleJS', 'da-tabs-inky__selected');
    selectedTabInky('da-tabs-inky__white', 'da-tabs-inky__white-link', 'rippleJS', 'da-tabs-inky__white-selected');
    selectedTabInky('da-tabs-toolbar__nav', 'da-tabs-inky__link', 'rippleJS', 'da-tabs-inky__selected');
    selectedTabInky('da-tabs-custom__nav', 'da-tabs-custom__link', 'rippleJS', 'da-tabs-inky__selected');





    let getTable = document.getElementById('tableHeader');
    let getTableInputs = document.getElementsByClassName('da-table__input');
    let getTableContainer = document.getElementById('da-table');
    let getSum = document.getElementById('da-table__sum');
    /*getTableContainer.addEventListener('click', function () {
        let target = event.target;
        alert(target);
        if (target.classList.contains('da-table__input')){
            if (target.hasAttribute('checked')){
                target.removeAttribute('checked');
            } else {
                target.setAttribute('checked', '');
            }
        }
    });*/

    getTable.addEventListener('click', function () {
        if (!getTable.checked === true){
            for (let i = 0; i < getTableInputs.length; i++){
                getTableInputs[i].checked = false;
                getTable.checked = false;
            }
        } else {
            for (let i = 0; i < getTableInputs.length; i++){
                getTableInputs[i].checked = true;
                getTable.checked = true;
            }
        }
    });


    getTableContainer.addEventListener('click', function () {
        let sum = 0;
        for(let i=0; i<getTableInputs.length; i++){
            if (getTableInputs[i].checked === true) {
                sum += 1;
            }
        }
        getSum.innerText = sum + " selected items";
    });



/*My function*/

    function selectedTabInky(wraper, itemClass, eventElement, classSelected) {
        let wraperClass = document.getElementsByClassName(wraper);
        for (let i = 0; i < wraperClass.length; i++){
            wraperClass[i].addEventListener('click', function () {
                let linkArr = wraperClass[i].getElementsByClassName(itemClass);
                let targetLink = event.target;
                if (!targetLink.classList.contains(eventElement)) return;
                for (let j = 0; j < linkArr.length; j++){
                    linkArr[j].classList.remove(classSelected);
                }
                targetLink.parentNode.classList.add(classSelected);
            }, );
        }
    }

    function selectedTab(wraper, itemClass, eventElement, classSelected) {
        let wraperClass = document.getElementsByClassName(wraper);
        for (let i = 0; i < wraperClass.length; i++){
            wraperClass[i].addEventListener('click', function () {
                let linkArr = wraperClass[i].getElementsByClassName(itemClass);
                let targetLink = event.target;
                if (!targetLink.classList.contains(eventElement)) return;
                for (let j = 0; j < linkArr.length; j++){
                    linkArr[j].classList.remove(classSelected);
                }
                targetLink.classList.add(classSelected);
            }, );
        }
    }

    $('a[href^="#"]').click(function () {
        let target = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80
        }, 500)
    });

};