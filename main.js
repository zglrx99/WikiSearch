$(document).ready(function () {
    $('button').click(function () {
        var data = 'action=opensearch&search=' + $('input').val();
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php',
            data: data,
            dataType: 'json',
            type: 'GET',
            headers: {
                'Api-User-Agent': 'Example/1.099191596'
            },
            success: function (data) {
                var newMainContent = '';
                for (var i=0; i<data[1].length; i++) {
                    data[1][i] ? true: data[1][i] = 'Wiki doesn\'t give any title :(';
                    data[2][i] ? true: data[2][i] = 'Wiki doesn\'t give any description :(';
                    newMainContent += '<ul class="list-group"><li class="list-group-item">' + data[1][i] + '</li><li class="list-group-item">' + data[2][i] + '</li><li class="list-group-item"><a target="_blank" href="'+ data[3][i] + '">Direct link, press it!</a></li></ul><hr class="my-4">';
                }
                if (newMainContent == '') {
                    $('.main').html('<div class="alert alert-danger text-center" role="alert">There is no information on wiki about your request :(</div>');
                } else {
                    $('.main').html(newMainContent);
                }
            }
        });
    });
});