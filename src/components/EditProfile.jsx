import React from 'react'

export default function EditProfile() {
  return (
    <div>
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
      
        {/* <!-- Modal content--> */}
        <div class="modal-content  edit-btn">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Modal Header</h4>
          </div>
          <div class="modal-body">
            <p>Some text in the modal.</p>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
            <h1>kemooooooooooooooo</h1>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}
