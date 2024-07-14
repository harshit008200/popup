
<script>
document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById("age-restriction-popup");
    var yesButton = document.getElementById("yes-button");
    var noButton = document.getElementById("no-button");

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function checkAgeVerification() {
        return getCookie("ageVerified");
    }

    if (!checkAgeVerification()) {
        popup.style.display = "flex";
    }

    yesButton.addEventListener("click", function() {
        setCookie("ageVerified", "true", 1); // Set cookie for 1 day
        popup.style.display = "none";
    });

    noButton.addEventListener("click", function() {
        alert("You must be 18 or older to view this content.");
        window.location.href = "https://www.google.com";
    });
});
</script>
