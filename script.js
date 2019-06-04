$(".bruh").click(function() { 
    var years = parseInt($(".years").val());
    var stat = $(".stat").val();
    if ( years>=10 && stat==="shooting"){
    $(".jef").text("STEPHEN CURRY!");
    } else if (years<10 && stat==="shooting"){
         $(".jef").text("KEVIN DURANT!");
    } else if (years<10 && stat==="dunking"){
         $(".jef").text("GIANNIS Antetokounmpo");
    } else if (years>=10 && stat==="dunking"){
         $(".jef").text("LEBRON JAMES!");
    } else { $(".jef").text("OOPS you're not any of these players! Try again.");
    }
});