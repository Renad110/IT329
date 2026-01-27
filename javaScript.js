

    /* (((( Renad ))))*/
   (() => {

  const MY_RECIPES_PAGE = "MyRecipes.html";

  function qs(id) {
    return document.getElementById(id);
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }


  const SAMPLE_RECIPES = {
  1: {
    name: "Vanilla Musk Blend",
    for: "Unisex",
    desc: "Soft vanilla with clean musk.",
    video: "https://www.youtube.com/",
    photo: "img/vanilla.jpg",
    ingredients: [
      { n: "Fixative", a: "5ml" },
      { n: "White Musk", a: "8ml" },
      { n: "Vanilla", a: "6ml" },
      { n: "Sandalwood", a: "3ml" },
    ],
    steps: [
      "Mix fixative with musk.",
      "Add vanilla gradually.",
      "Add sandalwood and rest for 24 hours.",
    ],
  },
  2: {
    name: "Rose Amber Blend",
    for: "Women",
    desc: "Warm amber blended with Taif rose.",
    video: "",
    photo: "img/amber.webp",
    ingredients: [
      { n: "Amber", a: "6ml" },
      { n: "Taif Rose", a: "7ml" },
      { n: "Bergamot", a: "3ml" },
    ],
    steps: [
      "Blend amber with rose.",
      "Add bergamot.",
      "Let it rest for 48 hours.",
    ],
  },
};



  /* ---------- Dynamic Ingredients ---------- */
  function addIngredientRow(ingredientsWrap, nameVal = "", amountVal = "") {
    const row = document.createElement("div");
    row.className = "row ingredient-row";

    row.innerHTML = `
      <div>
        <label>Name</label>
        <input class="field" type="text" name="ingredient_name[]" placeholder="e.g., White Musk" value="${escapeHtml(nameVal)}" required />
      </div>
      <div>
        <label>Amount</label>
        <input class="field" type="text" name="ingredient_qty[]" placeholder="e.g., 8ml" value="${escapeHtml(amountVal)}" required />
      </div>
    `;

    ingredientsWrap.appendChild(row);
  }

  /* ---------- Dynamic Steps / Instructions ---------- */
  function addStepRow(stepsWrap, stepText = "") {
    const stepNumber = stepsWrap.querySelectorAll(".step-row").length + 1;

    const row = document.createElement("div");
    row.className = "row row-1col step-row";

    row.innerHTML = `
      <div>
        <label>Step ${stepNumber}</label>
        <input class="field" type="text" name="step_text[]" placeholder="Write a step..." value="${escapeHtml(stepText)}" required />
      </div>
    `;

    stepsWrap.appendChild(row);
  }

  
  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  /* ---------- File validation (image/video only) ---------- */
  function validateFiles(form) {
    const photoInput = form.querySelector("#photo");
    const photoFile = photoInput?.files?.[0] || null;
    if (photoFile && !photoFile.type.startsWith("image/")) {
      alert("Photo must be an image file.");
      return false;
    }

    const videoFileInput = form.querySelector("#videoFile");
    const videoFile = videoFileInput?.files?.[0] || null;
    if (videoFile && !videoFile.type.startsWith("video/")) {
      alert("Video must be a video file.");
      return false;
    }

    return true;
  }

  /* ---------- Edit Prefill ---------- */
  function prefillEditForm(form, ingredientsWrap, stepsWrap) {
    if (form.getAttribute("data-mode") !== "edit") return;

    
    const id = getParam("id");
    const recipe = id && SAMPLE_RECIPES[id] ? SAMPLE_RECIPES[id] : null;

    if (recipe) {
      // Basic fields
      const nameEl = form.querySelector("#name");
      const catEl = form.querySelector("#category");
      const descEl = form.querySelector("#description");
      const videoEl = form.querySelector("#videoUrl");

      if (nameEl) nameEl.value = recipe.name;
      if (catEl) catEl.value = recipe.for;
      if (descEl) descEl.value = recipe.desc;
      if (videoEl) videoEl.value = recipe.video || "";

      // Ingredients prefill
      if (ingredientsWrap) {
        ingredientsWrap.innerHTML = ""; 
        recipe.ingredients.forEach((ing) => addIngredientRow(ingredientsWrap, ing.n, ing.a));
      }

      // Steps prefill
      if (stepsWrap) {
        stepsWrap.innerHTML = ""; 
        recipe.steps.forEach((st) => addStepRow(stepsWrap, st));
      }
      const currentPhoto = document.getElementById("currentPhoto");
      if (currentPhoto && recipe.photo) currentPhoto.src = recipe.photo;

      return; 
    }

    
    const name = getParam("name");
    const category = getParam("for");
    const desc = getParam("desc");
    const video = getParam("video");

    if (name) form.querySelector("#name").value = decodeURIComponent(name);
    if (category) form.querySelector("#category").value = decodeURIComponent(category);
    if (desc) form.querySelector("#description").value = decodeURIComponent(desc);
    if (video) form.querySelector("#videoUrl").value = decodeURIComponent(video);
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
  const form = qs("recipeForm");
  if (!form) return;

  const ingredientsWrap = qs("ingredientsWrap");
  const stepsWrap = qs("stepsWrap");
  const addIngredientBtn = qs("addIngredientBtn");
  const addStepBtn = qs("addStepBtn");

  // Dynamic buttons
  if (addIngredientBtn && ingredientsWrap) {
    addIngredientBtn.addEventListener("click", () => addIngredientRow(ingredientsWrap));
  }

  if (addStepBtn && stepsWrap) {
    addStepBtn.addEventListener("click", () => addStepRow(stepsWrap));
  }

  // Edit prefill
  prefillEditForm(form, ingredientsWrap, stepsWrap);

  // Submit -> redirect to My Recipes (only if required fields filled)
  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.reportValidity();
      return;
    }

    e.preventDefault(); // Phase 1

    if (!validateFiles(form)) return;

    window.location.href = MY_RECIPES_PAGE;
  });
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




