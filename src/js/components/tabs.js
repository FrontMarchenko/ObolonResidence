function getContent() {
    let room = $('.js-rooms-link.is-active').data('room');
        let content = $('.js-section-link.is-active').data('tab');
        let activeContent= $(`.apartament-content[data-room-content=${room}][data-section=${content}]`).addClass('is-active').siblings().removeClass('is-active');
      
        return activeContent
}

function getSection(){
    $('.js-section-link').on('click', function(e){
        e.preventDefault();
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active').siblings().removeClass('is-active');
        };
        let room = $(`.js-rooms-link[data-room="1"]`);
        room.addClass('is-active').siblings().removeClass('is-active')

        let tab = $(this).data('tab');

        getContent()
    })
}
getSection()
function getRoom(){
    $('.js-rooms-link').on('click', function(e){
        e.preventDefault();
        if(!$(this).hasClass('is-active')){
            $(this).addClass('is-active').siblings().removeClass('is-active');
            const content = getContent();
            console.log(content)
            getContent()
        };
        
    })
}
getRoom()
