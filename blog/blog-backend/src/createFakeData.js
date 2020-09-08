const Post = require("./models/post");

exports.createFakeData = function () {
  const posts = [...Array(40).keys()].map((i) => ({
    title: `포스트 #${i}`,
    body:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis ullamcorper tristique. Donec dictum sodales nibh eget facilisis. Vivamus tempus, est sit amet sodales iaculis, ligula tortor cursus diam, laoreet tincidunt erat nunc non magna. Morbi bibendum malesuada dapibus. Phasellus sed leo leo. Morbi at porta risus. In pellentesque, velit id ultricies consectetur, lectus lacus bibendum diam, in ullamcorper purus risus non eros. Vivamus bibendum ex lorem, a finibus turpis ornare at. Vivamus nec pretium ipsum, nec maximus justo. Vestibulum mollis dictum elit, eu lobortis arcu fringilla non. Sed pulvinar gravida dui, in efficitur lacus hendrerit sed.",
    tags: ["가짜", "데이터"],
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
};
