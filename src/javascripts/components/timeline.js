const info = () => {
  const paragraph = '<h1>Coming Soon</h1>';
  return paragraph;
};

const timeLine = () => {
  const timeLineString = `<div class="timeLine" id="timeLine">
  <div class='timeLineImage'></div>
  <div class='info'></div>
 </div>`;
  return timeLineString;
};

const appendWord = (words) => {
  $('.info').html('');
  $('.info').append(words);
};

const printTimeLine = () => {
  $('.inner-project').html('');
  $('.inner-project').html(timeLine());
  $('.info').html('');
  appendWord(info());
};

export default { printTimeLine };
