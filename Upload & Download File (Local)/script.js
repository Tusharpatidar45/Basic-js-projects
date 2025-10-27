let fileInput = document.getElementById("fileInput");
let downloadBtn = document.getElementById("downloadBtn");
let fileNameDisplay = document.getElementById("filename");
let uploadedFile = null;

fileInput.addEventListener("change", function (e) {
  let file = e.target.files[0];
  if (file) {
    uploadedFile = file;
    fileNameDisplay.textContent = `Selected File: ${file.name}`;
  } else {
    fileNameDisplay.textContent = "No file selected";
  }
});

downloadBtn.addEventListener("click", function () {
  if (!uploadedFile) {
    alert("Please upload a file first.");
    return;
  }
  let url = URL.createObjectURL(uploadedFile);
  let a = document.createElement("a");
  a.href = url;
  a.download = uploadedFile.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
