const info = () => {
  const paragraph = `<h1>My Story</h1> I started off my journey in development, after spending several years
  pursuing video.

  Making a life as a developer is not easy, but at least at the end of the day,
  I feel like I've gotten to learn new things. But it's also made somewhat of a 
  "Jack of all trades". For instance, I've written timekeeping apps, published mobile apps, 
  coded html emails, and written too many wikis to count. Currently I'm working in Quality Assurance.

  I love my job for a lot of reasons, not the least of which is the teamwork, watching
  out for each other, and how everyone tries to make a great product.

  In learning to be a developer I came to the realization that learning couldn't end,
  and grit and perseverence, as well as careful planning needed to be the norm.
  I decided to go to Nashville Software School because I wanted to correct some things
  in my software knowledge, so I could one day call myself not a "Jack of all trades",
  but rather be a software engineer.`;

  return paragraph;
};

const bio = () => {
  const bioString = `<div class="bio" id="bio">
  <div class='bioImage'></div>
  <div class='info'></div>
 </div>`;

  return bioString;
};

const appendWord = (words) => {
  $('.info').html('');
  $('.info').append(words);
};

const printBio = () => {
  $('.inner-project').html('');
  $('.inner-project').html(bio());
  $('.info').html('');
  appendWord(info());
};

export default { printBio };
