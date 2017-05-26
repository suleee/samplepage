$(function () {
    $('.expend-p').hide();
    $('.close01').hide();
    $('.open01').click(function () {
        $('.expend-p01').show();
        $('.open01').hide();
        $('.close01').show();
    });
    $('.close01').click(function () {
        $('.expend-p01').hide();
        $('.open01').show();
        $('.close01').hide();
    });


    $('.close02').hide();
    $('.open02').click(function () {
        $('.expend-p02').show();
        $('.open02').hide();
        $('.close02').show();
    });
    $('.close02').click(function () {
        $('.expend-p02').hide();
        $('.open02').show();
        $('.close02').hide();
    });

    $('.close03').hide();
    $('.open03').click(function () {
        $('.expend-p03').show();
        $('.open03').hide();
        $('.close03').show();
    });
    $('.close03').click(function () {
        $('.expend-p03').hide();
        $('.open03').show();
        $('.close03').hide();
    });

    $('.close04').hide();
    $('.open04').click(function () {
        $('.expend-p04').show();
        $('.open04').hide();
        $('.close04').show();
    });
    $('.close04').click(function () {
        $('.expend-p04').hide();
        $('.open04').show();
        $('.close04').hide();
    });


$('ul.tabs').each(function(){
  // For each set of tabs, we want to keep track of
  // which tab is active and its associated content
  var $active, $content, $links = $(this).find('a');

  // If the location.hash matches one of the links, use that as the active tab.
  // If no match is found, use the first link as the initial active tab.
  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

  // Hide the remaining content
  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  // Bind the click event handler
  $(this).on('click', 'a', function(e){
    // Make the old tab inactive.
    $active.removeClass('active');
    $content.hide();

    // Update the variables with the new link and content
    $active = $(this);
    $content = $(this.hash);

    // Make the tab active.
    $active.addClass('active');
    $content.show();

    // Prevent the anchor's default click action
    e.preventDefault();
  });
});


});