// ═══════════════════════════════════════════════════════════
// LANDPITCH - MAIN SCRIPT
// ═══════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function () {
  console.log('🚀 LandPitch loaded');
  
  initMobileMenu();
  initScrollAnimations();
  initFormHandling();
  initHeaderScroll();
});

// ═══════════════════════════════════════════════════════════
// MOBILE MENU TOGGLE
// ═══════════════════════════════════════════════════════════

function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (!menuToggle) return;

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Close menu on link click
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      nav.classList.remove('active');
    });
  });
}

// ═══════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════

function initScrollAnimations() {
  const elementsToAnimate = document.querySelectorAll(
    'section, .feature-card, .pricing-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  );

  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    observer.observe(element);
  });
}

// ═══════════════════════════════════════════════════════════
// HEADER SCROLL EFFECT
// ═══════════════════════════════════════════════════════════

function initHeaderScroll() {
  const header = document.querySelector('header');
  let lastScroll = 0;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
      header.style.background = 'rgba(247, 243, 238, 0.98)';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      header.style.background = 'rgba(247, 243, 238, 0.95)';
    }

    lastScroll = currentScroll;
  });
}

// ═══════════════════════════════════════════════════════════
// FORM HANDLING
// ═══════════════════════════════════════════════════════════

function initFormHandling() {
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Clear previous errors
    clearFormErrors();

    // Validate form
    if (!validateForm(form)) {
      return;
    }

    // Submit form
    await submitForm(form);
  });

  // Real-time validation
  const inputs = form.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('blur', function () {
      validateField(this);
    });
  });
}

function validateForm(form) {
  let isValid = true;
  const fields = form.querySelectorAll('input[required], textarea[required], select[required]');

  fields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  return isValid;
}

function validateField(field) {
  let isValid = true;
  let errorMessage = '';

  // Remove leading/trailing spaces
  const value = field.value.trim();

  if (field.hasAttribute('required') && value === '') {
    isValid = false;
    errorMessage = 'This field is required';
  } else if (field.type === 'email' && value !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid email address';
    }
  } else if (field.type === 'tel' && value !== '') {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = 'Please enter a valid phone number';
    }
  }

  // Update field styling
  const formGroup = field.closest('.form-group');
  if (!isValid) {
    formGroup.classList.add('has-error');
    let errorElement = formGroup.querySelector('.form-error');
    if (!errorElement) {
      errorElement = document.createElement('div');
      errorElement.className = 'form-error';
      formGroup.appendChild(errorElement);
    }
    errorElement.textContent = errorMessage;
  } else {
    formGroup.classList.remove('has-error');
    const errorElement = formGroup.querySelector('.form-error');
    if (errorElement) {
      errorElement.remove();
    }
  }

  return isValid;
}

function clearFormErrors() {
  const form = document.querySelector('form');
  form.querySelectorAll('.form-group').forEach(group => {
    group.classList.remove('has-error');
    const errorElement = group.querySelector('.form-error');
    if (errorElement) {
      errorElement.remove();
    }
  });
}

async function submitForm(form) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  
  try {
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Log data (replace with API endpoint)
    console.log('Form submitted:', data);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Show success message
    const successMsg = form.querySelector('.form-success');
    if (successMsg) {
      successMsg.classList.add('show');
      successMsg.textContent = '✓ Thank you! We\'ll get back to you soon.';
    }

    // Reset form
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMsg.classList.remove('show');
    }, 5000);

  } catch (error) {
    console.error('Form submission error:', error);
    alert('There was an error submitting the form. Please try again.');
  } finally {
    // Re-enable submit button
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

// ═══════════════════════════════════════════════════════════
// UTILITY FUNCTIONS
// ═════════════════��═════════════════════════════════════════

// Smooth scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Add class when element is in view
function observeElement(selector, className) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      } else {
        entry.target.classList.remove(className);
      }
    });
  });

  document.querySelectorAll(selector).forEach(el => {
    observer.observe(el);
  });
}

// ═══════════════════════════════════════════════════════════
// EXPORT FUNCTIONS FOR EXTERNAL USE
// ═══════════════════════════════════════════════════════════

window.LandPitch = {
  scrollToSection,
  observeElement,
  validateField
};

console.log('✅ LandPitch utilities ready');