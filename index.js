import $ from 'jquery'

function maxOf(arr) {
  let max = 0
  for (const e of arr) {
    if (e > max) max = e
  }
  return max
}

function drawBarChart(data, options, element) {
  const max = maxOf(data)
  const normalized = data.map(e => e / max)
  const $chart = $(element).addClass('chart')
  const $bars = normalized.map(n =>
    $('<div class="bar"></div>').css('height', `${n * 80}%`)
  )
  $chart.html($bars)
}

$(document).ready(() =>
  drawBarChart([1,2,3,4,5,6,3,2,1,5,2,1,], {}, "#root")
)