/**
 * Detective Escape Room — Project Demo & Walkthrough Guide
 * Features: Synchronized Pipeline Workflow, Tab Navigation, Clean Copy Interaction, Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  initWorkflowSync();
  initClipboardCopy();
  initLightbox();
});

/* ==========================================================================
   1. Synchronized Workflow Pipeline & Stage Tabs
   ========================================================================== */
function initWorkflowSync() {
  const pipelineCards = document.querySelectorAll('.pipeline-card');
  const stageTabs = document.querySelectorAll('.stage-tab-btn');
  const stagePanes = document.querySelectorAll('.stage-pane');

  function switchStep(stepNumber, shouldScroll = false) {
    const stepStr = String(stepNumber);

    // Update pipeline cards active state
    pipelineCards.forEach(card => {
      const target = card.getAttribute('data-step-target');
      card.classList.toggle('active', target === stepStr);
    });

    // Update stage tab buttons active state
    stageTabs.forEach(tab => {
      const tabTarget = tab.getAttribute('data-tab');
      const isActive = tabTarget === stepStr;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update stage detail panes
    stagePanes.forEach(pane => {
      const isTargetPane = pane.id === `pane-${stepStr}`;
      pane.classList.toggle('active', isTargetPane);
    });

    // Scroll to interactive section if triggered from top pipeline board
    if (shouldScroll) {
      const targetSection = document.getElementById('interactive-stage-section');
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // Click on pipeline board cards
  pipelineCards.forEach(card => {
    card.addEventListener('click', () => {
      const step = card.getAttribute('data-step-target');
      if (step) {
        switchStep(step, true);
      }
    });
  });

  // Click on stage tab buttons
  stageTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const step = tab.getAttribute('data-tab');
      if (step) {
        switchStep(step, false);
      }
    });
  });
}

/* ==========================================================================
   2. Clean Minimal Clipboard Copy
   ========================================================================== */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('.copy-trigger');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.stopPropagation();
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(textToCopy);
        } else {
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

        const originalText = btn.innerText;
        btn.innerText = '복사됨 ✓';
        btn.classList.add('copied');

        showMinimalToast(`클립보드에 복사되었습니다: ${textToCopy}`);

        setTimeout(() => {
          btn.innerText = originalText;
          btn.classList.remove('copied');
        }, 1600);

      } catch (err) {
        console.error('Failed to copy: ', err);
        showMinimalToast('복사 실패');
      }
    });
  });
}

function showMinimalToast(text) {
  const shelf = document.getElementById('toast-shelf');
  if (!shelf) return;

  const toast = document.createElement('div');
  toast.className = 'minimal-toast';
  toast.innerHTML = `
    <span class="toast-dot-success"></span>
    <span>${text}</span>
  `;

  shelf.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.2s ease';
    setTimeout(() => toast.remove(), 200);
  }, 2000);
}

/* ==========================================================================
   3. Lightbox Inspection Modal
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  function openLightbox(src, caption) {
    modalImg.src = src;
    modalCaption.textContent = caption || '';
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      modalImg.src = '';
    }, 200);
  }

  // Bind to image-viewer-box elements
  const viewerBoxes = document.querySelectorAll('.image-viewer-box');
  viewerBoxes.forEach(box => {
    box.addEventListener('click', () => {
      const src = box.getAttribute('data-zoom-src') || box.querySelector('img')?.src;
      const caption = box.getAttribute('data-caption') || '';
      if (src) openLightbox(src, caption);
    });
  });

  if (backdrop) backdrop.addEventListener('click', closeLightbox);
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeLightbox();
    }
  });
}
