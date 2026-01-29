

    /* (((( Renad ))))*/
   (() => {
  function qs(id) { return document.getElementById(id); }

  function addIngredientRow(ingredientsWrap) {
    const row = document.createElement("div");
    row.className = "row ingredient-row";
    row.innerHTML = `
      <div>
        <label>Name</label>
        <input class="field" type="text" name="ingredient_name[]" placeholder="e.g., White Musk" required />
      </div>
      <div>
        <label>Amount</label>
        <input class="field" type="text" name="ingredient_qty[]" placeholder="e.g., 8ml" required />
      </div>
    `;
    ingredientsWrap.appendChild(row);
  }

  function addStepRow(stepsWrap) {
    const stepNumber = stepsWrap.querySelectorAll(".step-row").length + 1;
    const row = document.createElement("div");
    row.className = "row row-1col step-row";
    row.innerHTML = `
      <div>
        <label>Step ${stepNumber}</label>
        <input class="field" type="text" name="step_text[]" placeholder="Write a step..." required />
      </div>
    `;
    stepsWrap.appendChild(row);
  }

  document.addEventListener("DOMContentLoaded", () => {
    const ingredientsWrap = qs("ingredientsWrap");
    const stepsWrap = qs("stepsWrap");
    const addIngredientBtn = qs("addIngredientBtn");
    const addStepBtn = qs("addStepBtn");

    if (addIngredientBtn && ingredientsWrap) {
      addIngredientBtn.addEventListener("click", () => addIngredientRow(ingredientsWrap));
    }

    if (addStepBtn && stepsWrap) {
      addStepBtn.addEventListener("click", () => addStepRow(stepsWrap));
    }

    
    if (ingredientsWrap && ingredientsWrap.children.length === 0) addIngredientRow(ingredientsWrap);
    if (stepsWrap && stepsWrap.children.length === 0) addStepRow(stepsWrap);
  });
})();


/* (((( End of Renad's code ))))*/





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




