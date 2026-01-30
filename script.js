// Auto-hide header on scroll

let lastScrollTop = 0;
const header = document.querySelector('header');
const scrollThreshold = 100; // Start hiding after scrolling 100px

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Don't hide if near top of page
    if (scrollTop < scrollThreshold) {
        header.classList.remove('hidden');
        return;
    }

    // Scrolling down - hide header
    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    }
    // Scrolling up - show header
    else {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

// Interactive collapsible artifact cards

document.addEventListener('DOMContentLoaded', function() {
    // Create image modal
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // Close modal on click
    modal.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.classList.remove('modal-open');
    });

    // Close modal on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('modal-open');
        }
    });

    // Get all artifact cards
    const artifacts = document.querySelectorAll('.artifact');

    artifacts.forEach(artifact => {
        // Skip if there's no reflection content
        const reflection = artifact.querySelector('.reflection');
        if (!reflection) return;

        // Skip reflection artifacts (academic and spiritual reflections)
        if (artifact.classList.contains('reflection-artifact')) return;

        // Add collapsed class initially
        artifact.classList.add('collapsed');

        // Create expand indicator
        const indicator = document.createElement('div');
        indicator.className = 'expand-indicator';
        indicator.innerHTML = '<span>Click to read reflection</span> <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

        // Insert indicator before reflection
        const description = artifact.querySelector('.description');
        if (description) {
            description.parentNode.insertBefore(indicator, description.nextSibling);
        } else {
            reflection.parentNode.insertBefore(indicator, reflection);
        }

        // Always create wrapper for reflection (with or without image)
        const reflectionWrapper = document.createElement('div');
        reflectionWrapper.className = 'reflection-wrapper';

        // Wrap reflection
        reflection.parentNode.insertBefore(reflectionWrapper, reflection);
        reflectionWrapper.appendChild(reflection);

        // Handle image if data-image attribute exists
        const imagePath = artifact.getAttribute('data-image');
        if (imagePath) {
            // Create image container
            const imageContainer = document.createElement('div');
            imageContainer.className = 'artifact-image';

            // Create image element
            const img = document.createElement('img');
            img.src = imagePath;
            img.alt = artifact.querySelector('h3').textContent;

            // Apply custom positioning if specified
            const position = artifact.getAttribute('data-position');
            if (position) {
                img.style.objectPosition = position;
            }

            imageContainer.appendChild(img);

            // Add click event to open modal
            img.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent artifact toggle
                modalImg.src = this.src;
                modalImg.alt = this.alt;
                modal.classList.add('active');
                document.body.classList.add('modal-open');
            });

            // Add image to wrapper
            reflectionWrapper.appendChild(imageContainer);
        }

        // Toggle on click
        artifact.addEventListener('click', function(e) {
            // Don't toggle if clicking on a link
            if (e.target.tagName === 'A') return;

            this.classList.toggle('collapsed');

            // Update indicator text
            if (this.classList.contains('collapsed')) {
                indicator.querySelector('span').textContent = 'Click to read reflection';
            } else {
                indicator.querySelector('span').textContent = 'Click to collapse';
            }
        });
    });
});
