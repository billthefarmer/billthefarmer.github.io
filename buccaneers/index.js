// Fetch JSON data
//

jQuery(document).ready(function($) {

    // jQuery.getJSON(url, function(data) {});

    // Maximum events

    var maxevents = 3;

    // Urls

    var eventsurl = "http://billthefarmer.users.sourceforge.net/events.php";
    var linksurl  = "http://billthefarmer.users.sourceforge.net/links.php";

    // Get year

    var now = new Date();
    var year = now.getFullYear();

    // Fix copyright

    $('#copyright').empty();
    $('#copyright').append('<p>Copyright &copy; ' + year +
			   ' Old Shoreham Buccaneers</p>');
    // get events
    /*
    $.ajaxSetup({cache: false});
    $.getJSON(eventsurl, function(data) {

	var now = new Date();
	var count = 0;

	$.each(data, function(index, item) {

	    var date = item['date'];
	    var time = item['time'];
	    var text = item['text'];

	    date = new Date(date);

	    if ((date > now) && (count < maxevents))
	    {
		$('#events').append('<dt><strong>' + time +
				    '</strong></dt><dd>' + text + '</dd>\n');
		count++;
	    }
	});

	if (count == 0)
	{
	    var item = data[data.length - 1];

	    var time = item['time'];
	    var text = item['text'];

	    $('#events').append('<dt><strong>' + time +
				'</strong></dt><dd>' + text + '</dd>\n');
	}
    });

    // Get links

    $.ajaxSetup({cache: false});
    $.getJSON(linksurl, function(data) {

	$.each(data, function(index, item) {

	    var text = item['text'];

	    $('#links').append('<li>' + text + '</li>\n');

	});
    });
    */
});
