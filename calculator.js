function fun(a) {
  const display = document.getElementById('val');

  if (a === '=') {
    if (display.value === '') {
      display.value = 'Enter Calculation';
      return;
    }
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'ERROR';
    }
  } else if (a === 'C') {
    display.value = '';
  } else if (a === 'CE') {
    display.value = display.value.slice(0, -1);
  } else {
    display.value += a;
  }
}
