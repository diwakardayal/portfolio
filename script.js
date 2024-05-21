/** @format */
"use strict";
const projectSection = document.getElementById("projectSectionId") || null;
const experienceSection = document.getElementById("experienceSection") || null

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("experienceBtn").addEventListener("click", () => {
    // Add the 'hide' class to the project section
    projectSection.classList.add("hide");
    projectSection.classList.remove("show");
    experienceSection.classList.remove("hide");
    console.log("hide class added to project section");
  });

  document.getElementById("projectBtn").addEventListener("click", () => {
    // Add the 'hide' class to the project section
    experienceSection.classList.add("hide");
    experienceSection.classList.remove("show");
    projectSection.classList.remove("hide");
  });

  
});
