/* European Union Public License version 1.2 */
/* Copyright © 2019 Rick Beerendonk          */

/* global Prism */

/* eslint no-unused-vars:warn */

function showSource(numberOfBottomLinesMargin = 2) {
  if (!document.location.href.startsWith('file')) {
    const source = document.getElementById('source').src;

    fetch(source)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
      })
      .then(code => {
        const preElem = document.createElement('pre');
        preElem.style = `margin-bottom: ${
          numberOfBottomLinesMargin * 3 + 1
        }rem`;
        preElem.classList.add('language-javascript');
        const codeElem = document.createElement('code');
        codeElem.innerHTML = code;
        preElem.appendChild(codeElem);
        document.body.appendChild(preElem);
        Prism.highlightElement(preElem);
      })
      .catch(() => {
        /* Don't show the source, or clutter the console */
      });
  }
}
