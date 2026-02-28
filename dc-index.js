function updateAll() {
    createHomeTable("homeContainer");
    createCategoryHomeTable("houseContainer", "House");
    createCategoryHomeTable("genderContainer", "Gender");
    createCategoryHomeTable("gradeContainer", "Grade");
}

loadData(yearSelect.value, termSelect.value, updateAll);

yearSelect.addEventListener("change", () => {
    loadData(yearSelect.value, termSelect.value, updateAll);
});

termSelect.addEventListener("change", () => {
    currentTerm = termSelect.value;
    loadData(yearSelect.value, termSelect.value, updateAll);
})

unitSelect.addEventListener("change", () => {
    currentUnit = unitSelect.value;
    loadData(yearSelect.value, termSelect.value, updateAll);
});
