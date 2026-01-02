jQuery(document).ready(function($) {

    // Get year
    let now = new Date();
    let year = now.getFullYear();

    // Fix copyright
    let copy = $(".copyright").first().html().replace(/\d{4}/, year);
    $(".copyright").first().html(copy);
});
