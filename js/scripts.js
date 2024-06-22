document.addEventListener('DOMContentLoaded', () => {
    console.log('Trang web đã được tải');

    // Cuộn mượt
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hiển thị thông báo
    document.querySelectorAll('.alert').forEach(alert => {
        setTimeout(() => {
            alert.style.display = 'none';
        }, 3000);
    });

    // Form validation
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value.trim();
            const email = form.querySelector('input[type="email"]').value.trim();
            const message = form.querySelector('textarea').value.trim();

            if (name === "" || email === "" || message === "") {
                alert("Vui lòng điền đầy đủ tất cả các trường.");
            } else if (!validateEmail(email)) {
                alert("Vui lòng nhập một địa chỉ email hợp lệ.");
            } else {
                alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
                form.reset();
            }
        });

        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }
    }

    // Menu responsive
    const menuToggle = document.createElement('button');
    menuToggle.innerText = 'Menu';
    menuToggle.classList.add('menu-toggle');
    document.querySelector('header').appendChild(menuToggle);

    const nav = document.querySelector('nav');
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            nav.classList.remove('nav-open');
        }
    });

    // Scroll to top
    const scrollTop = document.querySelector('.scroll-top');
    if (scrollTop) {
        scrollTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
