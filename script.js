/* =========================================
   AYARLAR
========================================= */

const settings = {

    relationshipStart:
        "2026-06-23T17:55:00",

    password:
        "0311"

};


/* =========================================
   ELEMENTLER
========================================= */

const loginScreen =
    document.getElementById("loginScreen");

const mainSite =
    document.getElementById("mainSite");

const passwordInput =
    document.getElementById("passwordInput");

const loginButton =
    document.getElementById("loginButton");

const loginError =
    document.getElementById("loginError");

const menuButton =
    document.getElementById("menuButton");

const closeMenu =
    document.getElementById("closeMenu");

const sideMenu =
    document.getElementById("sideMenu");

const menuOverlay =
    document.getElementById("menuOverlay");


/* =========================================
   GİRİŞ
========================================= */

function login() {

    if (
        passwordInput.value ===
        settings.password
    ) {

        loginScreen.style.display =
            "none";

        mainSite.style.display =
            "block";

        startTyping();

    } else {

        loginError.textContent =
            "Yanlış şifre 😢";

        passwordInput.value = "";

        passwordInput.focus();
    }
}

loginButton.addEventListener(
    "click",
    login
);

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            login();
        }

    }
);


/* =========================================
   MENÜ
========================================= */

function openMenu() {

    sideMenu.classList.add("open");

    menuOverlay.classList.add("active");
}

function closeSideMenu() {

    sideMenu.classList.remove("open");

    menuOverlay.classList.remove("active");
}

menuButton.addEventListener(
    "click",
    openMenu
);

closeMenu.addEventListener(
    "click",
    closeSideMenu
);

menuOverlay.addEventListener(
    "click",
    closeSideMenu
);


/* =========================================
   ALT MENÜLER
========================================= */

const categoryButtons =
    document.querySelectorAll(
        ".category-button"
    );

categoryButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const category =
                    button.parentElement;

                category.classList.toggle(
                    "open"
                );

            }
        );

    }
);


/* =========================================
   SAYFA DEĞİŞTİRME
========================================= */

const submenuButtons =
    document.querySelectorAll(
        ".submenu-button"
    );

const pages =
    document.querySelectorAll(".page");

submenuButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const target =
                    button.dataset.page;

                pages.forEach(
                    function(page) {

                        page.classList.remove(
                            "active-page"
                        );

                    }
                );

                const targetPage =
                    document.getElementById(
                        target
                    );

                if (targetPage) {

                    targetPage.classList.add(
                        "active-page"
                    );

                }


                submenuButtons.forEach(
                    function(item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add(
                    "active"
                );


                closeSideMenu();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }
);


/* =========================================
   TYPING
========================================= */

const typingText =
    "1 ay boyunca hayatımı güzel yüzünle güzelleştirdiğin, neşenle canıma can olduğun için çooooook teşekkür ederim. Seni çooook seviyorummm 💗";

let typingIndex = 0;

function startTyping() {

    const element =
        document.getElementById(
            "typingText"
        );

    element.textContent = "";

    typingIndex = 0;

    function type() {

        if (
            typingIndex <
            typingText.length
        ) {

            element.textContent +=
                typingText.charAt(
                    typingIndex
                );

            typingIndex++;

            setTimeout(
                type,
                45
            );
        }

    }

    type();
}


/* =========================================
   İLİŞKİ SAYAÇLARI
========================================= */

function updateCounters() {

    const start =
        new Date(
            settings.relationshipStart
        );

    const now =
        new Date();

    const difference =
        now - start;


    if (difference < 0) {
        return;
    }


    const totalSeconds =
        Math.floor(
            difference / 1000
        );


    const days =
        Math.floor(
            totalSeconds /
            (60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (totalSeconds %
                (60 * 60 * 24))
            /
            (60 * 60)
        );

    const minutes =
        Math.floor(
            (totalSeconds %
                (60 * 60))
            /
            60
        );

    const seconds =
        totalSeconds % 60;


    


    document.getElementById(
        "counterDays"
    ).textContent =
        days;


    document.getElementById(
        "counterHours"
    ).textContent =
        hours;


    document.getElementById(
        "counterMinutes"
    ).textContent =
        minutes;


    document.getElementById(
        "counterSeconds"
    ).textContent =
        seconds;

}

updateCounters();

setInterval(
    updateCounters,
    1000
);

// ==============================
// DOĞUM GÜNÜ SAYAÇLARI
// ==============================

function getNextBirthday(month, day, hour = 0, minute = 0) {

    const now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(
        year,
        month - 1,
        day,
        hour,
        minute,
        0
    );

    if (birthday <= now) {
        birthday = new Date(
            year + 1,
            month - 1,
            day,
            hour,
            minute,
            0
        );
    }

    return birthday;
}


function updateBirthdayCounters() {

    const now = new Date();


    // 🎂 Bebek Dilli → 29 Ocak

    const myBirthday =
        getNextBirthday(1 , 29 , 0 , 0 );

    const myDiff =
        myBirthday - now;


    const myDays =
        Math.floor(
            myDiff /
            (1000 * 60 * 60 * 24)
        );

    const myHours =
        Math.floor(
            (myDiff /
            (1000 * 60 * 60)) % 24
        );

    const myMinutes =
        Math.floor(
            (myDiff /
            (1000 * 60)) % 60
        );

    const mySeconds =
        Math.floor(
            (myDiff / 1000) % 60
        );


    document.getElementById(
        "myBirthdayDays"
    ).textContent = myDays;

    document.getElementById(
        "myBirthdayHours"
    ).textContent = myHours;

    document.getElementById(
        "myBirthdayMinutes"
    ).textContent = myMinutes;

    document.getElementById(
        "myBirthdaySeconds"
    ).textContent = mySeconds;



    // 🎂 Binay Vapur → 3 Kasım

    const partnerBirthday =
        getNextBirthday(11, 3 , 9 ,15 );

    const partnerDiff =
        partnerBirthday - now;


    const partnerDays =
        Math.floor(
            partnerDiff /
            (1000 * 60 * 60 * 24)
        );

    const partnerHours =
        Math.floor(
            (partnerDiff /
            (1000 * 60 * 60)) % 24
        );

    const partnerMinutes =
        Math.floor(
            (partnerDiff /
            (1000 * 60)) % 60
        );

    const partnerSeconds =
        Math.floor(
            (partnerDiff / 1000) % 60
        );


    document.getElementById(
        "partnerBirthdayDays"
    ).textContent = partnerDays;

    document.getElementById(
        "partnerBirthdayHours"
    ).textContent = partnerHours;

    document.getElementById(
        "partnerBirthdayMinutes"
    ).textContent = partnerMinutes;

    document.getElementById(
        "partnerBirthdaySeconds"
    ).textContent = partnerSeconds;

}


updateBirthdayCounters();


setInterval(
    updateBirthdayCounters,
    1000
);

/* =========================================
   EVET
========================================= */

const yesButton =
    document.getElementById(
        "yesButton"
    );

const resultText =
    document.getElementById(
        "resultText"
    );

yesButton.addEventListener(
    "click",
    function() {

        resultText.textContent =
            "Biliyordummmmmm 😍 Seni çooooooooook seviyorum ❤️";

        for (
            let i = 0;
            i < 50;
            i++
        ) {

            createHeart();

        }

    }
);


/* =========================================
   HAYIR
========================================= */

const noButton =
    document.getElementById(
        "noButton"
    );

noButton.addEventListener(
    "mouseenter",
    moveNo
);

function moveNo() {

    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;


    noButton.style.position =
        "fixed";

    noButton.style.left =
        Math.max(
            10,
            Math.random() * maxX
        ) + "px";

    noButton.style.top =
        Math.max(
            10,
            Math.random() * maxY
        ) + "px";
}


/* =========================================
   KALP OLUŞTUR
========================================= */

function createHeart() {

    const heart =
        document.createElement(
            "div"
        );

    heart.className =
        "heart";

    heart.textContent =
        "💗";

    heart.style.left =
        Math.random() * 100 +
        "vw";

    heart.style.fontSize =
        (
            Math.random() * 18 +
            18
        ) + "px";

    heart.style.animationDuration =
        (
            Math.random() * 2 +
            4
        ) + "s";

    document.body.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        6000
    );
}


/* =========================================
   ARKA PLANDAKİ KÜÇÜK KALPLER
========================================= */

setInterval(
    createHeart,
    1500
);