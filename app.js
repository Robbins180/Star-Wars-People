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
        console.log(data);
      },
      () => {
        console.log('bad request');
      }
    )
  })
})

// Break from People to Films


// $(() => {
//
//   const $modal2 = $('#modal2')
//
//   const openModal2 = () => {
//     $modal2.css('display', 'block')
//   }
//
//   const closeModal2 = () => {
//     $modal2.css('display', 'none')
//   }
//
//   const $openButton2 = $('#openModal2')
//   $openButton2.on('click', openModal2)
//
//   const $closeButton2 = $('#close2')
//   $closeButton2.on('click', closeModal2)
//
//
//   $('#filmes').on('click', (event) => {
//
//     event.preventDefault()
//
//     const userInput = $('input[type="text"]').val()
//
//     $.ajax({
//     url: 'https://swapi.dev/api/films/' + userInput,
//
//
//     }).then(
//       (data) => {
//         $('#title').html(data.title)
//         $('#episode_id').html(data.episode_id)
//         $('#director').html(data.director)
//         $('#producer').html(data.producer)
//         $('#release_date').html(data.release_date)
//         console.log(data);
//       },
//       () => {
//         console.log('bad request');
//       }
//     )
//   })
// })
