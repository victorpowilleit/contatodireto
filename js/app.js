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

  function formatTextForWhatsApp(text) {
    // Substitui quebras de linha (\n) por %0A
    return encodeURIComponent(text.trim().replace(/\n/g, '\n'));
  }

  confirmButton.onclick = function() {
    const inputValue = inputElement.value;
    const filteredValue = filterNumbers(inputValue);
    const initialTextValue = initialText.value;
    const formattedText = formatTextForWhatsApp(initialTextValue);
    
    // const message = formattedText.length > 0 ? `/?text=${formattedText}` : "";
    // openLinkInNewWindow(`https://wa.me/${filteredValue}${message}`);
    
    const message = formattedText.length > 0 ? `&text=${formattedText}` : "";
    openLinkInNewWindow(`https://web.whatsapp.com/send?phone=${filteredValue}${message}`);
  };
});
