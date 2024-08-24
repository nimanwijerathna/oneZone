document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggleSwitch = document.getElementById('theme-toggle');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Icon Replacement (assuming this is part of a discourse plugin or similar environment)
    if (typeof api !== 'undefined' && api.replaceIcon) {
        api.replaceIcon('fab-twitter', 'temporary-twitter-x');
    }
});
