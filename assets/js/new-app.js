App = {
    searchBox: null,
    search: null,
    body: null,
    closeButton: null,
    searchCont:null,

    init: function () {
        App.search = $('.search');
        App.searchBox = $('.search-box');
        App.closeButton = $('.close-search');
        App.body = $('body');
        App.searchCont  = $('.search-cont');

        // App.search.on('click', App.searchControl);
        App.closeButton.on('click', App.searchControl);

        $('#searchForm1').on('click', function (e) {
            e.stopPropagation();
        })
        //
        // App.body.on('click', function () {
        //     if (App.searchCont.hasClass('d-none')){
        //         console.log(1)
        //         App.searchControl();
        //     }
        // })


        $(document).click(function (e) {

            if ((!App.searchCont.is(e.target) && App.searchCont.has(e.target).length === 0 && !App.searchCont.hasClass('d-none'))||App.search.is(e.target.parentElement) || App.search.children()[0] ===(e.target.parentElement)){
                console.log('fififi')
                App.searchControl();
            }
        })

        // App.body.on("click", function(e) {
        //     console.log(e.target, App.search)
        //     if (
        //         App.searchBox.classList.contains('d-flex') &&
        //         e.target !== App.searchBox &&
        //         App.isClickInside(App._querySelectorAll('.search-box *'), e) &&
        //         e.target !== App.search &&
        //         App.isClickInside(App._querySelectorAll('.search *'), e)
        //     ) {
        //         App.searchControl();
        //     }
        // });
    },

    _querySelector: function (selector) {
        return document.querySelector(selector);
    },

    searchControl: function () {
        // console.log(1)
        // App.searchBox.toggleClass('opacity-0');
        // App.searchBox.toggleClass('opacity-100');
        App.searchCont.toggleClass('d-none');

        // App.searchBox.toggleClass('d-none')
    },

    _querySelectorAll: function (selector) {
        return document.querySelectorAll(selector);
    },

    isClickInside: (theList, e) => {
        for (let item of theList) {
            if (item === e.target) {
                return false;
            }
        }
        return true;
    }

}