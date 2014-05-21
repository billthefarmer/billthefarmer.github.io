// Fetch JSON data
//

jQuery(document).ready(function($) {

    // jQuery.getJSON(url, function(data) {});

    var eventsurl = "http://billthefarmer.users.sourceforge.net/events.php";

    var last;

    // Get year

    var now = new Date();
    var year = now.getFullYear();

    // Fix season

    $('#season').empty();
    $('#season').append('<h2>' + year + ' Season</h2>');

    // Fix copyright

    $('#copyright').empty();
    $('#copyright').append('<p>Copyright &copy; ' + year +
			   ' Old Shoreham Buccaneers</p>');
    // get events

    $.ajaxSetup({cache: false});
    $.getJSON(eventsurl, function(data) {

	$.each(data, function(index, item) {

	    var date = item['date'];
	    var time = item['time'];
	    var text = item['text'];

	    date = new Date(date);

	    var month = date.getMonth();

	    if (month != last)
	    {
		last = month;

		month = date.toString();

		month = $.format.date(month, 'MMMM');

		$('#events').append('<h3>' + month + '</h3>\n');
	    }

	    $('#events').append('<dt><strong>' + time +
				'</strong></dt><dd>' + text + '</dd>\n');
	});
    });
});
