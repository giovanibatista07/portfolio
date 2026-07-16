module.exports = function (eleventyConfig) {
  // "Giovani Batista" -> "GB"
  eleventyConfig.addFilter("initials", (name) =>
    (name || "")
      .split(" ")
      .filter(Boolean)
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
  );

  // Current year for the footer copyright line
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Compiled CSS (built by the Tailwind CLI into src/styles/main.css before Eleventy runs)
  eleventyConfig.addPassthroughCopy("src/styles/main.css");

  // Static assets
  eleventyConfig.addPassthroughCopy("src/resume.pdf");
  eleventyConfig.addPassthroughCopy("src/images");

  // Rebuild when the Tailwind source changes (css itself is rebuilt by watch:css)
  eleventyConfig.addWatchTarget("src/styles/input.css");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
  };
};
