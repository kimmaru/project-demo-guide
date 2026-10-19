/**
 * Detective Escape Room — Demo & Walkthrough Guide Scripts
 * Features: Instant copy-to-clipboard, toast feedback, screenshot lightbox modal.
 */

document.addEventListener('DOMContentLoaded', () => {
  initClipboardCopy();
  initScreenshotLightbox();
});

/* ==========================================================================
   1. Clipboard Copy with Toast Feedback
   ========================================================================== */
function initClipboardCopy() {
  const copyTriggers = document.querySelectorAll('.copy-trigger');
  
  copyTriggers.forEach(trigger => {
    trigger.addEventListener('click', async (e) => {
      e.stopPropagation();
      const textToCopy = trigger.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
          // Fallback for older contexts
          const textArea = document.createElement('textarea');
          textArea.value = textToCopy;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }

        // Visual feedback on button/trigger
        const originalText = trigger.innerText;
        const copyTextEl = trigger.querySelector('.copy-text');
        
        if (copyTextEl) {
          copyTextEl.textContent = '복사 완료! ✓';
        } else {
          trigger.innerText = '복사 완료! ✓';
        }
        trigger.classList.add('copied');

        showToast(`"${textToCopy}" 복사되었습니다.`);

        setTimeout(() => {
          if (copyTextEl) {
            copyTextEl.textContent = '복사';
          } else {
            trigger.innerText = originalText;
          }
          trigger.classList.remove('copied');
        }, 1800);

      } catch (err) {
        console.error('Failed to copy text: ', err);
        showToast('클립보드 복사에 실패했습니다.');
      }
    });
  });
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    setTimeout(() => {
      toast.remove();
    }, 200);
  }, 2200);
}

/* ==========================================================================
   2. Screenshot Lightbox Modal
   ========================================================================== */
function initScreenshotLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  const screenshotWindows = document.querySelectorAll('.screenshot-window');

  function openModal(imgSrc, caption) {
    modalImg.src = imgSrc;
    modalCaption.textContent = caption || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      modalImg.src = '';
    }, 250);
  }

  screenshotWindows.forEach(win => {
    win.addEventListener('click', () => {
      const imgSrc = win.getAttribute('data-zoom-img') || win.querySelector('img')?.src;
      const caption = win.getAttribute('data-caption') || '';
      if (imgSrc) {
        openModal(imgSrc, caption);
      }
    });
  });

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}
