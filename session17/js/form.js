$(document).ready(function() {
    $("#formDemo").validate({
        rules: {
            fullname : "required",
            adress : "required",
            phonenumber : "required",
            startday : "required",
            endday : "required",
            firstcount : "required",
            lastcount : "required",
        },
        messages: {
            fullname: "*Fullname is required",
            adress: "*Adress is required",
            phonenumber : "*Phone number is required",
            startday : "*Firstday is required",
            endday : {
                required : "*Lastday is required",                
            },
            firstcount : "*Previous number is required",
            lastcount : {
                required : "*Current number is required",
            },
        },
        submitHandler: function (form) {
            $("#formDemo").hide();
            $("#myform").show();
            
            var name = $(".name").val();
            $("#myform").append("HO VA TEN:"+name+"<br>");
            
            var adress = $(".adr").val();
            $("#myform").append("DIA CHI  :"+adress+"<br>");
            
            var phonenum = $(".phonenum").val();
            $("#myform").append("SO DIEN THOAI  :"+phonenum+"<br>");
            
            var startdate = $(".startdate").val();
            var enddate = $(".enddate").val();
            $("#myform").append("NGAY DAU KY  :"+startdate+"<br>");
            $("#myform").append("NGAY CUOI KY  :"+enddate+"<br>");

            var previousnumber = $(".previousnumber").val();
            var currentnumber = $(".currentnumber").val();
            $("#myform").append("SO DAU KY  :"+previousnumber+"<br>");
            $("#myform").append("SO CUOI KY  :"+currentnumber+"<br>");

            var note = $(".Note").val();
            $("#myform").append("GHI CHU  :"+note+"<br>");

            var totalnumber = currentnumber - previousnumber;
            var money;
            if (totalnumber < 100) {
                money = totalnumber*1500;
            } else if ((totalnumber > 100) && (totalnumber < 200)) {
                money = 100*1500 + (totalnumber-100)*2000;
            } else {
                money = 100*1500 + 100*2000 + (totalnumber-200)*3000;
            }
            // money = format_curency(money);
            $("#myform").append("SO TIEN PHAI NOP  :"+format_curency(money)+"<br>");            
        }
    })

    // compare date
    $.validator.addMethod("enddate", function() {
        var startdatevalue = $(".startdate").val();
        var enddatevalue = $(".enddate").val();
        return Date.parse(startdatevalue) <= Date.parse(enddatevalue);
    }, "*End Date should be greater than Start Date");

    // compare number
    $.validator.addMethod("currentnumber", function() {
        var previousnumbervalue = $(".previousnumber").val();
        var currentnumbervalue = $(".currentnumber").val();
        return parseInt(previousnumbervalue) <= parseInt(currentnumbervalue);
    }, "*Current number should be greater than Previous number");
});

function format_curency(a) {
    a = a.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    return a;
}