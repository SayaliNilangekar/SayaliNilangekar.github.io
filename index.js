const icons = document.querySelectorAll('.icon');
const threshold = 15; // Adjust this threshold as needed

icons.forEach((icon) => {
    icon.addEventListener('mousemove', (e) => {
        const iconRect = icon.getBoundingClientRect();
        const x = e.clientX - iconRect.left - iconRect.width / 2;
        const y = e.clientY - iconRect.top - iconRect.height / 2;

        // Calculate the direction of movement based on cursor position
        let moveX = 0;
        let moveY = 0;

        if (Math.abs(x) > threshold) {
            moveX = -x * 20;
        }

        if (Math.abs(y) > threshold) {
            moveY = -y * 20;
        }

        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'translate(0, 0)'; // Reset to the original position
    });
});