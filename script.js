function imageGallery() {
  const highlight = document.querySelector(".gallery-highlight");
  const previews = document.querySelectorAll(".room-preview img");
  previews.forEach((preview) => {
    preview.addEventListener("click", function () {
      const smallsrc = this.src;
      console.log(smallsrc);
      const bigsrc = smallsrc.replace("small", "big");
      console.log(bigsrc);
      highlight.src = bigsrc;
      previews.forEach((preview) => preview.classList.remove("room - active"));
      preview.classlist.add("room-active");
      //console.log(bigsrc);
    });
  });
}
imageGallery();
