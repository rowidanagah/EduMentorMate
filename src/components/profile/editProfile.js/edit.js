/*
function for data to be edited inline
*/
function editData(event) {
    const btn = $(event.target);
    const editEl = "#" + btn.data("edit");
     $(editEl).removeAttr("readonly").addClass("form-control-focus").focus(); //make data editable
    
    //save function to revert line back to original state and persist data
    let save = function(){
    $(editEl).attr("readonly", "").removeClass("form-control-focus"); //undo in-focus changes
      //persist data
    };
      
    $(editEl).blur(save); //register save when line out of focus
    
  }
  
  /*
  function for data to be edited in a popped up form
  */
  function showForm(event) {
    //create variables
    const btn = $(event.target);
    const tagClicked = btn.prop("tagName").toLowerCase();
    const editFor = "#" + btn.data("for");
    const editForm = "#" + btn.data("form");
    const cancelBtn = editForm + "-cancel";
    const saveBtn = editForm + "-save";
    
    //display edit form, hide the button and present data
    $(editForm).removeClass("d-none");
    $(editFor).addClass("d-none");
    if (tagClicked == "i") {
      btn.parent().addClass("d-none");
    } else {
      btn.addClass("d-none");
    }
    
    //un-hide the hidden button and data, hide the edit form
    let revert = function() {
      $(editForm).addClass("d-none");
      $(editFor).removeClass("d-none");
      btn.parent().removeClass("d-none"); 
      btn.removeClass("d-none");
    };
    
    let cancel = function() {
      revert();
    };
    let save = function() {
      revert();
      //persist
    };
    
    $(cancelBtn).click(cancel);
    $(saveBtn).click(save);
    
  }
  
  for (const child of document.querySelectorAll(".edit-inline")) {
    child.onclick = editData;
  }
  
  for (const child of document.querySelectorAll(".edit-inform")) {
    child.onclick = showForm;
  }
  
  
  
  
  //datepicker
  var now = new Date();
  var lastYear = now.getFullYear() - 1; //a year ago
  var genesisYear = lastYear - 60; //when the world begins
      
  const picker = new tempusDominus.TempusDominus(document.querySelector('#datepicker'), {
    display: {
       viewMode: 'years',
       components: {
         decades: false,
         year: true,
         month: true,
         date: true,
         hours: false,
         minutes: false,
         seconds: false,
       }
    }, //end display options
    restrictions: {
      minDate: new Date(genesisYear, 0, 1),
      maxDate: new Date(lastYear, 11, 31), 
     }, //end restrictions options
    useCurrent: false,  
    //defaultDate: new Date("2019-12-31"),
   });
  
  //Toast stuff
  let tel = $('#toastTest')[0],
      t = new bootstrap.Toast(tel)
  t.show()
  