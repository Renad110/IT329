/* footer header and the page */


    // عناصر DOM
    const themeToggle = document.getElementById('themeToggle');
    const sunIcon = document.getElementById('sunIcon');
    const body = document.body;
    const userName = document.getElementById('userName');
    const notificationBtn = document.getElementById('notificationBtn');
    const settingsBtn = document.getElementById('settingsBtn');

    // التحقق مما إذا كان الوضع الداكن مفعلًا من قبل
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // تطبيق الوضع المحدد عند تحميل الصفحة
    if (isDarkMode) {
      enableDarkMode();
    }

    // تبديل الوضع عند النقر على الزر
    themeToggle.addEventListener('click', () => {
      if (body.classList.contains('dark-mode')) {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });

    // وظيفة تفعيل الوضع الداكن
    function enableDarkMode() {
      body.classList.add('dark-mode');
      sunIcon.className = 'fas fa-moon';
      localStorage.setItem('darkMode', 'true');
    }

    // وظيفة تعطيل الوضع الداكن
    function disableDarkMode() {
      body.classList.remove('dark-mode');
      sunIcon.className = 'fas fa-sun';
      localStorage.setItem('darkMode', 'false');
    }

    // تغيير اسم المستخدم عند النقر عليه (تجريبي)
    userName.addEventListener('click', () => {
      const newName = prompt('أدخل اسم جديد للترحيب:', userName.textContent);
      if (newName && newName.trim() !== '') {
        userName.textContent = newName.trim();
      }
    });

    // إضافة تفاعل للأزرار
    notificationBtn.addEventListener('click', () => {
      alert('هذه إشعارات تجريبية. في التطبيق الفعلي، ستظهر الإشعارات هنا.');
    });

    settingsBtn.addEventListener('click', () => {
      alert('هنا ستكون إعدادات المستخدم في التطبيق الفعلي.');
    });

    // إضافة تأثير بسيط عند تحميل الصفحة
    window.addEventListener('load', () => {
      document.querySelector('.header').style.opacity = '0';
      document.querySelector('.header').style.transform = 'translateY(-20px)';

      setTimeout(() => {
        document.querySelector('.header').style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        document.querySelector('.header').style.opacity = '1';
        document.querySelector('.header').style.transform = 'translateY(0)';
      }, 300);
    });