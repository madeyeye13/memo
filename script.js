// document.addEventListener("DOMContentLoaded", () => {
//     const sectionTitles = document.querySelectorAll(".section-title");
//     const collections = document.querySelectorAll(".main-mom");

//     sectionTitles.forEach((title) => {
//         title.addEventListener("click", () => {
//             // Remove active class from all titles and collections
//             sectionTitles.forEach((t) => t.classList.remove("active"));
//             collections.forEach((c) => c.classList.remove("active"));

//             // Add active class to the clicked title
//             title.classList.add("active");

//             // Show the corresponding collection
//             const collectionId = `${title.dataset.collection}-collection`;
//             const targetCollection = document.getElementById(collectionId);

//             if (targetCollection) {
//                 targetCollection.classList.add("active");
//             }
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", () => {
    const sectionTitles = document.querySelectorAll(".section-title");
    const collections = document.querySelectorAll(".main-mom");

    // Retrieve the active collection from localStorage
    const activeCollection = localStorage.getItem("activeCollection");
    if (activeCollection) {
        // Set the active collection
        sectionTitles.forEach((title) => {
            title.classList.toggle(
                "active",
                title.dataset.collection === activeCollection
            );
        });

        collections.forEach((collection) => {
            collection.classList.toggle(
                "active",
                collection.id === `${activeCollection}-collection`
            );
        });
    }

    
    sectionTitles.forEach((title) => {
        title.addEventListener("click", () => {
            
            sectionTitles.forEach((t) => t.classList.remove("active"));
            collections.forEach((c) => c.classList.remove("active"));

            
            title.classList.add("active");

            
            const collectionId = `${title.dataset.collection}-collection`;
            const targetCollection = document.getElementById(collectionId);

            if (targetCollection) {
                targetCollection.classList.add("active");

                
                localStorage.setItem("activeCollection", title.dataset.collection);
            }
        });
    });
});

