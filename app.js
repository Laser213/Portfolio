const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { rootMargin: "0px 0px 0px 0px" });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hidden1');
hiddenElements2.forEach((el) => observer2.observe(el));

const observer4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { rootMargin: "0px 0px -30% 0px" });

const observer5 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { rootMargin: "0px 0px 0px 0px" });

const hiddenElements5 = document.querySelectorAll('.hidden4');
hiddenElements5.forEach((el) => observer5.observe(el));

const hiddenElements4 = document.querySelectorAll('.hidden3');
hiddenElements4.forEach((el) => observer4.observe(el));

function openSection(evt, sectionTitle) {
    // Declare all variables
    var i, tabscontent, tablinks;


    tabscontent = document.getElementsByClassName("tabscontent");
    for (i = 0; i < tabscontent.length; i++) {
        tabscontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(sectionTitle).style.display = "flex";
    evt.currentTarget.className += " active";
}

document.addEventListener('DOMContentLoaded', function () {
    window.onload = function () {
        document.getElementById('xpButton').click();
    };
});

document.addEventListener('scroll', (e) => {
    const navScroll = document.querySelector('.navbar1');
    if (window.scrollY > 0) {
        navScroll.classList.add("drop_shadow");
    } else {
        navScroll.classList.remove("drop_shadow");
    }
});

document.addEventListener('scroll', (e) => {
    const navScroll = document.querySelector('.arrow_container');
    if (window.scrollY > 75) {
        navScroll.classList.add("invisible");
    } else {
        navScroll.classList.remove("invisible");
    }
});

function openModal(imageSrc) {
    // Display the overlay
    document.getElementById('overlay').style.display = 'flex';

    // Set the image source in the modal
    console.log(imageSrc);
    document.getElementById('modal-image').src = imageSrc;
    console.log("This is running");
}

function closeModal() {
    // Hide the overlay
    document.getElementById('overlay').style.display = 'none';
}

document.getElementById("email").addEventListener("click", function (event) {
    event.preventDefault();

    copyFunction();
})

function copyFunction () {
    var copyText = document.getElementById("email");

    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    alert("Copied!");
}