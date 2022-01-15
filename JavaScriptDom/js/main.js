'use strict';

{
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') { //Element.tagNameはタグ名を大文字で返す仕様。そのため、'LI'と比較する。
      e.target.classList.toggle('done');
    }
  });
}
