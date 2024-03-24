$(document).ready(function (){
    $('header button').click(function(){
        $('form').slideDown()
    })
    $('#cancel-button').click(function(){
        $('form').slideUp()
    })
})

$('form').on('submit',function(e){
    e.preventDefault()
    const newImageUrl = $('#new-url').val()
    const newItem = $('<li style="display:none"> </li>')
    $(`<img src="${newImageUrl}" />`).appendTo(newItem)
    $(`
        <div class="overlay-link">
        <a href="${newImageUrl}" title="Ver em tamanho real" target="_blank">
        Ver em tamanho real
        </a>
        </div>
    
    
    `).appendTo(newItem)
    
    newItem.appendTo('ul')
    newItem.fadeIn(800)
    $('#new-url').val('')
})

