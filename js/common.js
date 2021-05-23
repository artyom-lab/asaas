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

  $(document).on('change', '.up', function() {
    var profilePicValue = $(this).val();
    var fileNameStart = profilePicValue.lastIndexOf('\\'); /* finds the end of the filepath */
    profilePicValue = profilePicValue.substr(fileNameStart + 1).substring(0, 20); /* isolates the filename */
    //var profilePicLabelText = $(".upl"); /* finds the label text */
    if (profilePicValue != '') {
      //console.log($(this).closest('.fileUpload').find('.upl').length);
      $(this).siblings('.fileUpload').find('.upl').html(profilePicValue); /* changes the label text */
      $(this).siblings('.delete-small').show();
    };
  });
  $(".delete-small").click(function() {
    $(this).hide().siblings(".up").val("").siblings(".fileUpload").find('.upl').html("Upload your auction license certificate");
  });

function ekUpload() {
  function Init() {

    console.log("Upload Initialised");

    var fileSelect    = document.getElementById('file-upload'),
        fileDrag      = document.getElementById('file-drag');

    fileSelect.addEventListener('change', fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      fileDrag.addEventListener('dragover', fileDragHover, false);
      fileDrag.addEventListener('dragleave', fileDragHover, false);
      fileDrag.addEventListener('drop', fileSelectHandler, false);
    }
  }

  function fileDragHover(e) {
    var fileDrag = document.getElementById('file-drag');

    e.stopPropagation();
    e.preventDefault();

    fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
  }

  function fileSelectHandler(e) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
      uploadFile(f);
    }
  }

  // Output
  function output(msg) {
    // Response
    var m = document.getElementById('messages');
    m.innerHTML = msg;
  }

  function parseFile(file) {

    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );
    
    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start').classList.add("hidden");
      document.getElementById('notimage').classList.add("hidden");
      document.getElementById('response').classList.remove("hidden");
      // Thumbnail Preview
      document.getElementById('file-image').classList.remove("hidden");
      document.getElementById('file-image').src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('start').classList.remove("hidden");
      document.getElementById('notimage').classList.remove("hidden");
      document.getElementById('response').classList.add("hidden");
      document.getElementById('file-image').classList.add("hidden");
      document.getElementById("file-upload-form").reset();
    }
  }

  function setProgressMaxValue(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e) {
    var pBar = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  function uploadFile(file) {
    
    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById('class-roster-file'),
      pBar = document.getElementById('file-progress'),
      fileSizeLimit = 1024; // In MB
    if (xhr.upload) {
      // Check if file is less than x MB
      if (file.size <= fileSizeLimit * 1024 * 1024) {
        // Progress bar
        pBar.style.display = 'inline';
        xhr.upload.addEventListener('loadstart', setProgressMaxValue, false);
        xhr.upload.addEventListener('progress', updateFileProgress, false);

        // File received / failed
        xhr.onreadystatechange = function(e) {
          if (xhr.readyState == 4) {
            // Everything is good!
            // progress.className = (xhr.status == 200 ? "success" : "failure");
            // document.location.reload(true);
          }
        };
        // Start upload
        xhr.open('POST', document.getElementById('file-upload-form').action, true);
        xhr.setRequestHeader('X-File-Name', file.name);
        xhr.setRequestHeader('X-File-Size', file.size);
        xhr.setRequestHeader('Content-Type', 'multipart/form-data');
        xhr.send(file);
      } else {
        output('Please upload a smaller file (< ' + fileSizeLimit + ' MB).');
      }
    }
  }
  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById('file-drag').style.display = 'none';
  }
}
ekUpload();

$(".delete-img").click(function() {
  document.getElementById('start').classList.remove("hidden");
  document.getElementById('notimage').classList.add("hidden");
  document.getElementById('response').classList.add("hidden");
  document.getElementById('file-image').classList.add("hidden");
  document.getElementById('file-image').classList.add("hidden");
  document.getElementById('file-image').src = "#!";
  $("#file-drag").removeClass("modal-body").removeClass("file-upload");
  $("#file-upload").val("");
  // $(this).hide().siblings(".up").val("").siblings(".fileUpload").find('.upl').html("Upload your auction license certificate");
});

});

