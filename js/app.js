document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.getElementById('contactString');
  const confirmButton = document.getElementById('confirm');
  const initialText = document.getElementById('initialText');

  function filterNumbers(input) {
    const numbers = input.match(/\d+/g);
    let result = numbers ? numbers.join('') : '';
    if (!result.startsWith('55')) {
      result = '55' + result;
    }
    return result;
  }

  function openLinkInNewWindow(url) {
    window.open(url, '_blank', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=800,height=600');
  }


  confirmButton.addEventListener('click', function() {
    const inputValue = inputElement.value;
    const filteredValue = filterNumbers(inputValue);
    const filteredText = initialText.value.trim()
    const message = filteredText.length>0 ? `/?text=${filteredText}` : ""
    openLinkInNewWindow(`https://wa.me/${filteredValue}${message}`);
  });
});
