        //show and hide password
        function ShowPwd(a) {
            var x = document.getElementById("myInput");
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }

        function HidePwd(a) {
            var x = document.getElementById("myInput");
            if (x.type === "text") {
                x.type = "password";
            } else {
                x.type = "text";
            }
        }