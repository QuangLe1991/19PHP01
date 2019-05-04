$(document).ready(function() {
        $("#formDemo").validate({
            rules: {
                fullname : {
                	required : true,
                },
                adress : "required",
                phonenumber : "required"
            },
            messages: {
                fullname: "nhap ho ten",
                adress: "nhap dia chi",
                phonenumber : "nhap so dien thoai"
            }
        })
    });