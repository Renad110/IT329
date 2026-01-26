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













    /*lubna/
    //////////////////////////*/
    
    // Set current year
    document.getElementById('Lubna-currentYear').textContent = new Date().getFullYear();
    
    // Form submission handler (non-functional in Phase 1)
    document.querySelectorAll('.Lubna-action-form').forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Form submission is non-functional in Phase 1.\nIn Phase 2, this will process the action via PHP.');
        // In Phase 1, just reload the page to simulate submission
        window.location.href = 'AdminPage.html';
      });
    });
    
    // Highlight active form radio buttons
    document.querySelectorAll('.Lubna-radio-label input[type="radio"]').forEach(radio => {
      radio.addEventListener('change', function() {
        // Remove active class from all labels in this group
        const groupName = this.name;
        document.querySelectorAll(`input[name="${groupName}"]`).forEach(r => {
          r.parentElement.style.fontWeight = 'normal';
        });
        
        // Add active class to selected label
        this.parentElement.style.fontWeight = '600';
      });
      
      // Initialize active state
      if (radio.checked) {
        radio.parentElement.style.fontWeight = '600';
      }
    });



    /*end og lubna */