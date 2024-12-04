document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    function showTabContent(activeTab) {
        tabContents.forEach(content => {
            content.classList.remove("active");
        });

        const contentId = `content-${activeTab}`;
        document.getElementById(contentId).classList.add("active");
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            tabs.forEach(tab => {
                tab.classList.remove("active");
            });

            tab.classList.add("active");

            const tabId = tab.id.split('-')[1];
            showTabContent(tabId);
        });
    });

    showTabContent(1);
});
