$(document).ready(function () {
  $(".pagination .pages li a").on("click", function (e) {
    e.preventDefault();
    $(".pagination .pages li a").removeClass("active");
    $(this).addClass("active");

    // Simulate dynamic results info change
    let pageNum = $(this).text();
    let startResult = 1,
      endResult = 30,
      totalResults = 347;
    if (pageNum === "1") {
      startResult = 1;
      endResult = 30;
    } else if (pageNum === "2") {
      startResult = 31;
      endResult = 60;
    } else if (pageNum === "17") {
      startResult = 481;
      endResult = 510;
    } else if (pageNum === "18") {
      startResult = 511;
      endResult = 540;
    } else {
      // Handle cases like "..." where no specific page number is clicked
      return;
    }
    $(".results-info").text(
      `Showing ${startResult}–${endResult} of ${totalResults} results`
    );
  });
});

function setActive(element) {
  const tabs = document.querySelectorAll(".tabs a");
  tabs.forEach((tab) => tab.classList.remove("active"));
  element.classList.add("active");
}
