var mathPackages = ['noundefined', 'autoload', 'ams', 'textmacros', 'xypic'];

window.MathJax = {
  loader: {
    load: ['[custom]/xypic'],
    paths: { custom: 'https://cdn.jsdelivr.net/gh/sonoisa/XyJax-v3@3.0.1/build/' }
  },
  startup: {
    typeset: true,
    ready: () => {
      updateMathJax();
      MathJax.startup.defaultReady();
      MathJax.startup.document.addStyleSheet();
    }
  },
  tex: {
    macros: {
      // https://github.com/mathjax/MathJax/pull/1810/files
      AA: "\u00c5", alef: "\\aleph", alefsym: "\\aleph", Alpha: "\\mathrm{A}", and: "\\land", ang: "\\angle", Bbb: "\\mathbb", Beta: "\\mathrm{B}", bold: "\\mathbf", bull: "\\bullet", C: "\\mathbb{C}", Chi: "\\mathrm{X}", clubs: "\\clubsuit", cnums: "\\mathbb{C}", Complex: "\\mathbb{C}", coppa: "\u03D9", Coppa: "\u03D8", Dagger: "\\ddagger", Digamma: "\u03DC", darr: "\\downarrow", dArr: "\\Downarrow", Darr: "\\Downarrow", diamonds: "\\diamondsuit", empty: "\\emptyset", Epsilon: "\\mathrm{E}", Eta: "\\mathrm{H}", euro: "\u20AC", exist: "\\exists", geneuro: "\u20AC", geneuronarrow: "\u20AC", geneurowide: "\u20AC", H: "\\mathbb{H}", hAar: "\\Leftrightarrow", harr: "\\leftrightarrow", Harr: "\\Leftrightarrow", hearts: "\\heartsuit", image: "\\Im", infin: "\\infty", Iota: "\\mathrm{I}", isin: "\\in", Kappa: "\\mathrm{K}", koppa: "\u03DF", Koppa: "\u03DE", lang: "\\langle", larr: "\\leftarrow", Larr: "\\Leftarrow", lArr: "\\Leftarrow", lrarr: "\\leftrightarrow", Lrarr: "\\Leftrightarrow", lrArr: "\\Leftrightarrow", Mu: "\\mathrm{M}", N: "\\mathbb{N}", natnums: "\\mathbb{N}", Nu: "\\mathrm{N}", O: "\\emptyset", officialeuro: "\u20AC", Omicron: "\\mathrm{O}", or: "\\lor", P: "\u00B6", pagecolor: ["", 1], part: "\\partial", plusmn: "\\pm", Q: "\\mathbb{Q}", R: "\\mathbb{R}", rang: "\\rangle", rarr: "\\rightarrow", Rarr: "\\Rightarrow", rArr: "\\Rightarrow", real: "\\Re", reals: "\\mathbb{R}", Reals: "\\mathbb{R}", Rho: "\\mathrm{P}", sdot: "\\cdot", sampi: "\u03E1", Sampi: "\u03E0", sect: "\\S", spades: "\\spadesuit", stigma: "\u03DB", Stigma: "\u03DA", sub: "\\subset", sube: "\\subseteq", supe: "\\supseteq", Tau: "\\mathrm{T}", textvisiblespace: "\u2423", thetasym: "\\vartheta", uarr: "\\uparrow", uArr: "\\Uparrow", Uarr: "\\Uparrow", varcoppa: "\u03D9", varstigma: "\u03DB", vline: "\\smash{\\large\\lvert}", weierp: "\\wp", Z: "\\mathbb{Z}", Zeta: "\\mathrm{Z}",
      dashint: "\\unicodeInt{x2A0D}",
      ddashint: "\\unicodeInt{x2A0E}",
      oiint: "\\unicodeInt{x222F}",
      oiiint: "\\unicodeInt{x2230}",
      ointctrclockwise: "\\unicodeInt{x2233}",
      unicodeInt: ["\\mathop{\\vcenter{\\mathchoice{\\huge\\unicode{#1}\\,}{\\unicode{#1}}{\\unicode{#1}}{\\unicode{#1}}}\\,}\\nolimits", 1],
      varointclockwise: "\\unicodeInt{x2232}",
    },
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    packages: { '[+]': mathPackages },
  },
  svg: {
    scale: 1,
    minScale: 80,
  },
};

function findDelimiter(text, delimitors, defaultPos) {
  for (const del of delimitors) {
    const pos = text.indexOf(del);
    if (pos >= 0) return pos;
  }
  return defaultPos;
}

function findBounds(text) {
  return {
    start: findDelimiter(text, ["\\[", "\\(", "$$", "$"], 0),
    end: findDelimiter(text, ["\\]", "\\)", "$$", "$"], text.length),
  };
}

function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}


function updateMathJax() {
  let arithmatexDivs = document.getElementsByClassName("arithmatex");
  for (const div of arithmatexDivs) {
    let text = div.textContent;
    // only insert \displaylines if a newline is found in latex
    if (text.indexOf("\\\\") >= 0 || text.indexOf("\\newline") >= 0) {
      const bounds = findBounds(text);
      text = insert(text, bounds.end, "}");
      text = insert(text, bounds.start + 2, "\\displaylines {");
      div.textContent = text;
    }
  }
}
