$.getJSON('data/data.json', function(data){
    var result = '<ul>';
    $.each(data, function (key, val) {
        result += '<li>' + val.shortname + '</li>';
    });
    result += '</ul>';
    $('#readData').prepend(result);
});

