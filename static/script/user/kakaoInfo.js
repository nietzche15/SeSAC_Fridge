function phone_num_hyphen(target) {
  if (target !== '') {
    $('#phone_num').removeClass('is-invalid');
  }
  target.value = target.value
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
    .replace(/(\-{1,2})$/g, '');
}

function info() {
  var form = document.getElementById('form_info');
  axios({
    method: 'post',
    url: '/kakao/info',
    data: {
      user_phone: form.user_phone.value.replace(/[^0-9]/g, ''),
    },
  }).then((res) => {
    form.reset();
    location.href = '/';
  });
}
