$("form").submit(function (event) {
  event.preventDefault()
  $.bitlr({
    apiKey: "23c47f073826eb0cdc1c2abedbb006976e0e0549",
    link: $("#long-url").val(),
    anchor: true,
    success: function (newLink) {
      $("#shortUrl").html(newLink)
    },
    error: function () {
      $("#shortUrl").html("There was an error when trying to shorten your URL. Please try again later.")
    }
  })
})
