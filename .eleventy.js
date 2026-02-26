module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("admin");
  return {
    dir: {
      input: "pages",
      includes: "../_includes",
      output: "_site"
    }
  };
};
