//Skrypt tworzy kopię pliku indeks w foldrze do dist
import fs from "fs";
import cheerio from "cheerio";
import colors from "colors";

/*eslint-disable no-console */

fs.readFile("src/index.html", "utf8", (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  //Jeden css
  $("head").prepend("<link rel='stylesheet' href='styles.css'>");

  fs.writeFile("dist/index.html", $.html(), "utf8", function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("index.html zapisany do /dist".green);
  });
});
