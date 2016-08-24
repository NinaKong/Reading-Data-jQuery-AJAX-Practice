$getJSON('data/data.json', function(data){
    var result = '<ul>';
    $.each(data, function (key, val) {
        output += '<li>' + val.shortname + '</li>';
    });
    result += '</ul>';
    $('#readData').prepemd(result);
});

