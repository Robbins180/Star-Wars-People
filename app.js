$(() => {

  const $modal = $('#modal')

  const startBtn = () => {
    $modal.css('display', 'block')
  }

  const closeBtn = () => {
    $modal.css('display', 'none')
  }

  const $openButton = $('#startBtn')
  $openButton.on('click', startBtn)

  const $closeButton = $('#close')
  $closeButton.on('click', closeBtn)


  $('form').on('click', (event) => {

    event.preventDefault()

    const userInput = $('input[type="text"]').val()

    $.ajax({
    url: 'https://swapi.dev/api/people/' + userInput,


    }).then(
      (data) => {
        $('#name').html(data.name)
        $('#height').html(data.height)
        $('#mass').html(data.mass)
        $('#hair_color').html(data.hair_color)
        $('#gender').html(data.gender)
      },
      () => {
        console.log('bad request');
      }
    )
  })
})
