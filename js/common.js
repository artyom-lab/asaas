$(function() {

  $(".owl-1").owlCarousel({
    items: 1,
    center: true,
    loop: true,
    nav: true,
    dots: true,
    smartSpeed: 1000,
    navText: ["", ""]
  });

  Waves.attach('.btn-sign, .btn-edit, .owl-prev, .owl-next, .watch, .page-link');
  Waves.attach('.btn', ['waves-light']);
  Waves.init();

  AOS.init({
    duration: 1000,
    disable: 'mobile'
  });

  $('#form').validate({
    rules: {
      phone: {
        required: true,
        minlength: 12,
        maxlength: 13,
      },
      code: {
        required: true,
        minlength: 11,
        maxlength: 11,
      },
      firstname: {
        required: true,
        minlength: 2
      },
      secondname: {
        required: true,
        minlength: 2
      },
      thirdname: {
        required: true,
        minlength: 2
      },
      familyname: {
        required: true,
        minlength: 2
      },
      compname: {
        required: true,
        minlength: 2
      },
      compadress: {
        required: true,
        minlength: 2
      },
      displayname: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        minlength: 6
      },
      registrationnumber: {
        required: true,
        minlength: 8,
        maxlength: 8,
      },
      registrationnumber2: {
        required: true,
        minlength: 10,
        maxlength: 10,
      },
      description: {
        required: true,
        minlength: 1,
        maxlength: 200,
      },
      description2: {
        required: true,
        minlength: 1,
        maxlength: 50,
      },
      description3: {
        required: true,
        minlength: 1,
        maxlength: 100,
      },
      description250a: {
        required: true,
        minlength: 1,
        maxlength: 250,
      },
      description250b: {
        required: true,
        minlength: 1,
        maxlength: 250,
      },
      description250c: {
        required: true,
        minlength: 1,
        maxlength: 250,
      },
      upload: {
        required: true,
      },
      fileUpload: {
        required: true,
      },
      cardnumber: {
        minlength: 1,
        required: true,
      },
      holdername: {
        required: true,
        minlength: 8,
        maxlength: 8,
      },
      date: {
        required: true,
        minlength: 5,
      },
      cvv: {
        required: true,
        minlength: 3,
        maxlength: 3,
      },
      amount: {
        required: true,
        minlength: 3,
      },
      propertyarea: {
        required: true,
        minlength: 1,
      },
      city: {
        required: true,
        minlength: 2,
      },
      neighbourhood: {
        required: true,
        minlength: 2,
      },
      buildingnumber: {
        required: true,
        minlength: 1,
      },
      zip: {
        required: true,
        minlength: 1,
      },
      select: {
        required: true,
      },
      startdate: {
        required: true,
      },
      starttime: {
        required: true,
      },
      enddate: {
        required: true,
      },
      endtime: {
        required: true,
      },
      startingbid: {
        required: true,
        minlength: 1,
      },
      minimumbid: {
        required: true,
        minlength: 1,
      },
    },

    submitHandler: function(form) {
      $(form).submit(function(e) {
        e.preventDefault();
      });
    }

  });

  $('#count-eight').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current'),
        maximum = $('#maximum'),
        theCount = $('#the-count'); 
    current.text(characterCount);
  });

  $('#count-ten').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-10'),
        maximum = $('#maximum-10'),
        theCount = $('#the-count-10'); 
    current.text(characterCount);
  });

  $('#count-50').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-50'),
        maximum = $('#maximum-50'),
        theCount = $('#the-count-50'); 
    current.text(characterCount);
  });

  $('#count-100').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-100'),
        maximum = $('#maximum-100'),
        theCount = $('#the-count-100'); 
    current.text(characterCount);
  });

  $('#count-200').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-200'),
        maximum = $('#maximum-200'),
        theCount = $('#the-count-200'); 
    current.text(characterCount);
  });

  $('#count-250a').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-250a'),
        maximum = $('#maximum-250a'),
        theCount = $('#the-count-250a'); 
    current.text(characterCount);
  });

  $('#count-250b').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-250b'),
        maximum = $('#maximum-250b'),
        theCount = $('#the-count-250b'); 
    current.text(characterCount);
  });

  $('#count-250c').keyup(function() {  
    var characterCount = $(this).val().length,
        current = $('#current-250c'),
        maximum = $('#maximum-250c'),
        theCount = $('#the-count-250c'); 
    current.text(characterCount);
  });

  $('#switcher').change(function() { 
    var blockPerson = $(".block-person");
    var blockCompany = $(".block-company");
    if ($(this).is(':checked')) {
      blockPerson.hide();
      blockCompany.show();
    } else {
      blockPerson.show();
      blockCompany.hide();
    };
  });

  var popupTimer;
  function delayPopup(popup) {
    popupTimer = setTimeout(function() { $(popup).popover('hide') }, 4000);
  };
  $('.copy').click(function () {
    clearTimeout(popupTimer);
    $(".popover").popover('hide');
    var $input = $(this).siblings('.form-control');
    /* Select the text field */
    $input.select();
    /* Copy the text inside the text field */
    document.execCommand("copy");
    $(this)
      .popover({
        title    : 'Successfully copied to clipboard!',
        content  : 'Share this link with your receiver or distributor so they can confirm their order.',
      })
      .popover('show')
    ;
    // Hide popup after 4 seconds
    delayPopup(this);
  });

  var icons = {
    time: 'far fa-clock',
    date: 'fas fa-calendar-alt',
    up: 'fas fa-angle-up',
    down: 'fas fa-angle-down',
    previous: 'fas fa-angle-left',
    next: 'fas fa-angle-right',
    today: 'fas fa-crosshairs',
    clear: 'far fa-trash-alt',
    close: 'fas fa-times'
  };
  $(".datepicker").datetimepicker({
    format: 'DD / MM / YYYY',  
    icons: icons,
    // debug: true
  });
  $('.timepicker').datetimepicker({
    format: 'LT',
    icons: icons,
    // debug: true
  });

  var placeholder;
  $(document).on('change', '.uploader-input', function() {
    var input = $(this),
        profilePicValue = input.val(),
        fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
    profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0, 20); /* isolates the filename */
    placeholder = input.siblings('.form-control').find('.image').attr('src');
    if (profilePicValue != '') {
      input.siblings('.form-control').children('.uploader-text').html(profilePicValue);
      input.closest('.uploader').addClass('uploaded');
    };
    let file = this.files[0]; 
    var reader = new FileReader();
    reader.onload = function (e) {
      input.siblings('.form-control').find('.image').attr('src', e.target.result);
    };
    reader.readAsDataURL(file);
  }).on('click', '.delete', function() {
    $(this).closest('.uploader').removeClass('uploaded').find('input[type="file"]').val('').siblings('.form-control').children('.uploader-text').html('Upload your auction license certificate');
    $(this).closest('.uploader').find('.image').attr('src', placeholder);
  });

});

