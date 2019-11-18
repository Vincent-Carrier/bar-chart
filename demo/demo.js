import { drawBarChart } from "../src/index";
import $ from 'jquery';

const data = [
  { value: 25, label: 'first' },
  { value: 18, label: 'second' },
  { value: 20, label: 'third' },
  { value: 12, label: 'fourth' },
  { value: 22, label: 'fifth' },
  { value: 6, label: 'sixth' }
];

const options = {
  width: '500px',
  height: '400px',
  title: 'A great title'
};

$(document).ready(() =>
  drawBarChart(data, options, '#root')
);
