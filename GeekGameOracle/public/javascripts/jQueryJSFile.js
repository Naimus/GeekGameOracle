// Basic template based on: http://learn.jquery.com/using-jquery-core/document-ready/
$(function () {
    var data = getDatafromAPI();
    showNextLevel("Choose an option", $('#optionsContainer'), data, 0);

});

function showNextLevel(header,container, data, i) {
    var currentLevel = data[i];
    if (currentLevel.Game == null) {
        container.empty();
        header.html(currentLevel.Question);

        for (var j = 0; j < currentLevel.length; j++) {
            var itemLevel = container.append("<div class='option'>" + currentLevel.Title + "</div>");
            itemLevel.click(showNextLevel(currentLevel,j));
        }
    } else {
        header.html(currentLevel.Game);
        container.append(currentLevel.Game);        
    }

}

function getDatafromAPI() {
    return new JSON.parse("{{Level: { Title: 'What Option?', Level: { Game: 'Game1' } } },{Level: { Title: 'What Option?', Level: { Game: 'game2' } } }}");
}

function getDataTest() {
}

function test() {
    $('#optionsHeader').html("What Option will you choose?");
    $('#optionsContainer').append("<div class='option'>Option1!</div>");
    $('#optionsContainer').append("<div class='option'>Option2!</div>");
    $('#optionsContainer').append("<div class='option'>Option3!</div>");
    $('#optionsContainer').click(function (e) { $(this).empty(); $('#optionsContainer').append("<div class='option'>Level2 is here!</div>"); });

}