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
            $("#mybill").show();
            
            var name = $(".name").val();
            $("#name_display").append(name);
            
            var adress = $(".adr").val();
            $("#adr_display").append(adress);
            
            var phonenum = $(".phonenum").val();
            $("#phnum_display").append(phonenum);
            
            var startdate = $(".startdate").val();
            var enddate = $(".enddate").val();
            $("#sd_display").append(startdate);
            $("#ed_display").append(enddate);

            var previousnumber = $(".previousnumber").val();
            var currentnumber = $(".currentnumber").val();
            $("#pn_display").append(previousnumber);
            $("#cn_display").append(currentnumber);

            var note = $(".Note").val();
            $("#note_display").append(note);
            
            // Tinh tien dien tieu thu
            var totalnumber = currentnumber - previousnumber;
            var money;
            if (totalnumber < 100) {
                money = totalnumber*1500;
            } else if ((totalnumber > 100) && (totalnumber < 200)) {
                money = 100*1500 + (totalnumber-100)*2000;
            } else {
                money = 100*1500 + 100*2000 + (totalnumber-200)*3000;
            }
            // money.format_curency(money);
            $("#bill_display").append(format_curency(money));            
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
    return a.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}