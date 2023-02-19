const EditProfile = () => {
    return (
        <main class="container mt-5 mb-5">
            <main class="row justify-content-center">
                <section class="col-10">
                    <div class="card shadow pb-3">
                        <div class="row justify-content-center">
                            <div class="col-4 position-relative">
                                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/britney-spears-at-the-american-music-awards-news-photo-1617195388.?crop=1.00xw:0.690xh;0,0.105xh&resize=980:*"
                                    class="rounded-circle card-profile-image position-absolute top-0 start-50" /><span
                                        class="btn btn-light btn-sm rounded-circle edit-img-btn position-absolute"><i
                                            class="bi bi-camera-fill"></i></span>
                            </div>
                        </div>
                        <div class="card-header bg-secondary border-0 pt-5 pb-5"> </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div class="d-flex flex-row justify-content-center mt-5">
                                        <span class="px-2">
                                            22 Friends
                                        </span>
                                        <span class="px-2">
                                            20 Followers
                                        </span>
                                        <span class="px-2">
                                            19 Posts
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-center my-4">
                                <div class="h2">
                                    Britney Spears
                                </div>

                                <div class="my-3 position-relative w-100">
                                    <span class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                        id="location-edit-btn" data-form="location-edit-form" data-for="location"><i
                                            class="bi bi-pencil-fill" data-form="location-edit-form"
                                            data-for="location"></i></span>
                                    <input type="text"
                                        class="h5 text-center form-control-plaintext w-50 ms-auto me-auto m-0 p-0"
                                        id="location" value="York, England" readonly />
                                    <form class="row gy-3 w-50 ms-auto me-auto mb-3 d-none" id="location-edit-form">
                                        <div class="h5 text-primary mb-0">Location info</div>
                                        <div class="col-6 form-floating">
                                            <input type="text" class="form-control ps-3" id="city" placeholder="Add a city" />
                                            <label for="city" class="form-label mx-2 ps-3">City</label>
                                        </div>
                                        <div class="col-6 form-floating">
                                            <input type="text" class="form-control ps-3" id="country"
                                                placeholder="Add a country" />
                                            <label for="country" class="form-label mx-2 ps-3"> Country</label>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="col-3 my-2 btn btn-primary rounded-pill mx-2"
                                                id="location-edit-form-cancel">Cancel</button>
                                            <button type="button" class="col-3 my-2 btn btn-primary rounded-pill mx-2"
                                                id="location-edit-form-save">Save</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="d-flex justify-content-center my-0 position-relative w-100">
                                    <span class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                        id="age-edit-btn" data-form="age-edit-form" data-for="age"><i
                                            class="bi bi-pencil-fill" data-form="age-edit-form" data-for="age"></i></span>
                                    <div class="h5" id="age"><i class="bi bi-gender-female"></i><input type="text"
                                        class="m-0 d-inline px-2 py-0 text-start form-control-plaintext w-10 ms-auto me-auto"
                                        value="38" readonly /></div>
                                    <form class="row gy-3 w-50 ms-auto me-auto mb-3 d-none" id="age-edit-form">
                                        <div class="h5 text-primary mb-0">Basic info</div>
                                        <div class="col-8 ms-auto me-auto">
                                            <select class="form-select ps-3">
                                                <option selected disabled>Gender</option>
                                                <option value="m">Male</option>
                                                <option value="f">Female</option>
                                                <option value="i">Intersex</option>
                                            </select>
                                        </div>
                                        <div class="col-8 ms-auto me-auto">
                                            <div class='input-group' id='datepicker' data-td-target-input='nearest'
                                                data-td-target-toggle='nearest'>
                                                <input id='viewModeInput' type='text' class='form-control ps-3'
                                                    data-td-target='#datepicker' />
                                                <span class='input-group-text' data-td-target='#datepicker'
                                                    data-td-toggle='datetimepicker'>
                                                    <span class='bi bi-calendar'></span>
                                                </span>
                                            </div>
                                        </div>


                                        <div class="text-center">
                                            <button type="button" class="col-3 my-2 btn btn-primary rounded-pill mx-2"
                                                id="age-edit-form-cancel">Cancel</button>
                                            <button type="button" class="col-3 my-2 btn btn-primary rounded-pill mx-2"
                                                id="age-edit-form-save">Save</button>
                                        </div>
                                    </form>
                                </div>

                                <div class="my-3 position-relative w-100">
                                    <span class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                        id="work-edit-btn" data-for="work" data-form="work-edit-form"><i
                                            class="bi bi-pencil-fill" data-for="work" data-form="work-edit-form"></i></span>
                                    <input type="text"
                                        class="h6 m-0 p-0 text-center form-control-plaintext w-50 ms-auto me-auto" id="work"
                                        value="Talent Manager at Sony Music" readonly />
                                    <form class="row gy-3 w-75 ms-auto me-auto mb-3 d-none" id="work-edit-form">
                                        <div class="h5 text-primary mb-0">Work info</div>
                                        <div class="col-8 ms-auto me-auto form-floating">
                                            <input type="text" class="form-control ps-3" id="job" placeholder="Add a job" />
                                            <label for="job" class="form-label mx-2 ps-3">Job title</label>
                                        </div>
                                        <div class="col-8 ms-auto me-auto form-floating">
                                            <input type="text" class="form-control ps-3" id="company"
                                                placeholder="Add a workplace" />
                                            <label for="company" class="form-label mx-2 ps-3">Company name</label>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="col-2 my-2 btn btn-primary rounded-pill mx-2"
                                                id="work-edit-form-cancel">Cancal</button>
                                            <button type="button" class="col-2 my-2 btn btn-primary rounded-pill mx-2"
                                                id="work-edit-form-save">Save</button>
                                        </div>
                                    </form>
                                </div>
                                <div class='my-3 position-relative w-100'>
                                    <span class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                        id="study-edit-btn" data-form="study-edit-form" data-for="study"><i
                                            class="bi bi-pencil-fill" data-form="study-edit-form"
                                            data-for="study"></i></span>
                                    <input type="text"
                                        class="h6 m-0 p-0 text-center form-control-plaintext w-50 ms-auto me-auto"
                                        id="study" value="University of St. Andrews" readonly />
                                    <form class="row gy-3 w-75 ms-auto me-auto d-none" id="study-edit-form">
                                        <div class="h5 text-primary mb-0">Education info</div>
                                        <div class="col-8 ms-auto me-auto form-floating">
                                            <input type="text" class="form-control ps-3" id="major"
                                                placeholder="Add a subject" />
                                            <label for="major" class="form-label mx-2 ps-3">Study subject</label>
                                        </div>
                                        <div class="col-8 ms-auto me-auto form-floating">
                                            <input type="text" class="form-control ps-3" id="school"
                                                placeholder="Add a school" />
                                            <label for="school" class="form-label mx-2 ps-3">School name</label>
                                        </div>
                                        <div class="text-center">
                                            <button type="button" class="col-2 my-2 btn btn-primary rounded-pill mx-2"
                                                id="study-edit-form-cancel">Cancel</button>
                                            <button type="button" class="col-2 my-2 btn btn-primary rounded-pill mx-2"
                                                id="study-edit-form-save">Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <hr class="mb-0" />
                            <section class="row">
                                <div class="col-12">
                                    <div class="h6 mt-4 mb-2 position-relative w-100">About<span
                                        class="btn btn-light btn-sm position-absolute rounded-circle edit-btn edit-inline"
                                        id="about-edit-btn"><i class="bi bi-pencil-fill" data-edit="about"></i></span>
                                    </div>
                                    <textarea class="m-0 p-1 form-control-plaintext w-100" id="about" rows="3"
                                        placeholder="Write something about yourself"
                                        readonly>England is a country that is part of the United Kingdom. It shares land borders with Wales to its west and Scotland to its north. ... The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.</textarea>
                                </div>

                                <div class="col-12">
                                    <div class="h6 mt-4 mb-2 position-relative w-100">Interests <span
                                        class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inline"
                                        id="interests-edit-btn"><i data-edit="interests"
                                            class="bi bi-pencil-fill"></i></span></div>
                                    <textarea class="m-0 p-1 form-control-plaintext w-100" id="interests"
                                        placeholder="Add interests" rows="1"
                                        readonly>Planning and organization skills.</textarea>
                                </div>
                                <div class="col-12">
                                    <div class="h6 mt-4 mb-2 position-relative w-100">Favorite quote<span
                                        class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inline"
                                        id="quote-edit-btn" data-edit="quote"><i class="bi bi-pencil-fill"
                                            data-edit="quote"></i></span></div><textarea
                                                class="m-0 p-1 form-control-plaintext w-100" id="quote" rows="1"
                                                placeholder="Add a favorite quote"
                                                readonly>Stupid people are everywhere. Fuck them all!!!! -Esinstein</textarea>
                                </div>
                                <div class="row" id="contact">
                                    <div class="col-4">
                                        <div class="h6 mt-4 mb-2 position-relative w-100 edit-btn-container">Email <span
                                            class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                            id="contact-edit-btn" data-form="contact-edit-form" data-for="contact"><i
                                                class="bi bi-pencil-fill" data-form="contact-edit-form"
                                                data-for="contact"></i></span></div>
                                        <input type="text" class="m-0 p-0 form-control-plaintext w-100"
                                            placeholder="Add an email" value="hello@gmail.com" readonly />
                                    </div>
                                    <div class="col-4">
                                        <div class="h6 mt-4 mb-2 position-relative w-100 edit-btn-container">Website<span
                                            class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                            id="contact-edit-btn" data-form="contact-edit-form" data-for="contact"><i
                                                class="bi bi-pencil-fill" data-form="contact-edit-form"
                                                data-for="contact"></i></span></div>
                                        <input type="text" class="m-0 p-0 form-control-plaintext w-100"
                                            placeholder="Add a website" value="www.fuckyou.com" readonly />
                                    </div>
                                    <div class="col-4">
                                        <div class="h6 mt-4 mb-2 position-relative w-100 edit-btn-container">Social
                                            media<span
                                                class="btn btn-light btn-sm rounded-circle position-absolute edit-btn edit-inform"
                                                id="contact-edit-btn" data-form="contact-edit-form" data-for="contact"><i
                                                    class="bi bi-pencil-fill" data-form="contact-edit-form"
                                                    data-for="contact"></i></span></div>
                                        <input type="text" class="m-0 p-0 form-control-plaintext w-100"
                                            placeholder="Add a social link" value="facebook.com/asshole" readonly />
                                    </div>
                                </div>
                                <form class="row gy-3 w-50 ms-auto me-auto mb-3 d-none" id="contact-edit-form">
                                    <div class="h5 text-center text-primary mb-0">Contacts</div>
                                    <div class="col-12 ms-auto me-auto form-floating">
                                        <input type="email" class="form-control ps-3" id="email" placeholder="Add an email" />
                                        <label for="email" class="form-label mx-2 ps-3">Email</label>
                                    </div>
                                    <div class="col-6 ms-auto me-auto form-floating">
                                        <input type="url" class="form-control ps-3" id="website"
                                            placeholder="Add a website" />
                                        <label for="website" class="form-label mx-2 ps-3">Website</label>
                                    </div>
                                    <div class="col-6 ms-auto me-auto form-floating">
                                        <input type="url" class="form-control ps-3" id="sociallink"
                                            placeholder="Add a social link" />
                                        <label for="sociallink" class="form-label mx-2 ps-3">Social link</label>
                                    </div>
                                    <div class="text-center">
                                        <button type="button" class="col-3 my-2 btn btn-primary rounded-pill mx-2"
                                            id="contact-edit-form-cancel">Cancel</button>
                                        <button type="button" class="col-3 my-2 btn btn-primary rounded-pill mx-2"
                                            id="contact-edit-form-save">Save</button>
                                    </div>
                                </form>
                            </section>

                        </div>
                    </div>
                </section>
            </main>
        </main>
    )
}


export default EditProfile;