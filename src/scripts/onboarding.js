$(document).ready(function () {

    function securityTemplate(securityNumber) {
        let defaultSecurityStatus = document.getElementById("default-security-status");
        if (defaultSecurityStatus) {
            defaultSecurityStatus = defaultSecurityStatus.value;
        }
        let randomString = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8);
        return `<section class="custom-security-block ad-rounded-2 ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-p-16 ad-mb-24"> 
                    <div  class="ad-flex ad-justify-between">
                        <label class="ad-text-18 ad-text-blue-header">Security Details</label> 
                        <div>
                            <label class="delete-security-block ad-text-red-error ad-cursor-pointer ad-text-12">Delete</label>
                            <p data-handler="${randomString}" class="ad-inline slider-activator-custom">
                                <span class="ad-inline-block ad-ml-16"><svg class="ad-inline-block ad-cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 5L13 10L12.3 10.7L8 6.4L3.7 10.7L3 10L8 5Z" fill="black"/>
                                </svg></span>
                            </p>
                        </div>
                    </div>
                    <section class="${randomString} section-block ad-flex ad-flex-wrap ad-justify-between ad-pt-24">
                        <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Security
                                Name <sup class="ad-text-red-error">*</sup></label>
                            <input name="security-name"
                                class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                type="text" data-validation-type="alphanumericSpace" data-error-default="Security Name" placeholder="Security Name">
                        </p>
                        <p class="ad-mb-24 ad-w-1/2 ad-pl-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">ISIN Code</label>
                            <input data-field="not-required" data-validation-type="alphanumeric" name="isin-code"
                                class="ad-block ad-uppercase ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                type="text" data-validation-type="alphanumeric" data-error-default="ISIN Code" placeholder="ISIN Code">
                        </p>

                        <div class="ad-mb-24 ad-w-1/2 ad-pr-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Security
                                Type <sup class="ad-text-red-error">*</sup></label>
                                <div class="dropDownControl onboarding issuer-security-type  ad-w-full ad-p-12 ad-mb-4" data-error-default="Selected valid disclosure type">
                                    <p class="ad-flex ad-justify-between ad-items-center">
                                        <label class="selectValue ad-text-blue-header">Select security type</label>
                                        <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                                        </svg>
                                    </p>
                                    <div style="width: 100%; display:none;" class="dropdown-list">
                                        
                                    </div>
                            </div>
                        </div>

                        <div class="ad-mb-24 ad-w-1/2 ad-pl-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">RIE</label>
                                <div data-field="not-required" class="dropDownControl miccode default ad-w-full ad-p-12 ad-mb-4" data-error-default="Select valid RIE">
                                <p class="ad-flex ad-justify-between ad-items-center">
                                    <label class="selectValue ad-text-blue-header">Select RIE</label>
                                    <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                                        </svg>
                                </p>
                                <div style="width: 100%; display: none;" class="dropdown-list">
                                <div class="ad-bg-white ad-py-8">
                                    <p class="ad-bg-white ad-flex ad-mx-12 ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2">
                                        <input data-field="not-required" class="ad-bg-white ad-pl-12 ad-w-full ad-text-blue-header single-select-search-dropdown" type="text" placeholder="Search RIE">
                                        <span class="ad-px-12 ad-py-8">
                                                <svg class="ad-inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 17.8687L14.0312 13.125C16.3746 10.2976 16.0822 6.12774 13.3672 3.65505C10.6522 1.18236 6.47324 1.2799 3.87657 3.87657C1.2799 6.47324 1.18236 10.6522 3.65505 13.3672C6.12774 16.0822 10.2976 16.3746 13.125 14.0312L17.8687 18.75L18.75 17.8687ZM3.125 8.75C3.125 5.64339 5.64339 3.125 8.75 3.125C11.8566 3.125 14.375 5.64339 14.375 8.75C14.375 11.8566 11.8566 14.375 8.75 14.375C5.64339 14.375 3.125 11.8566 3.125 8.75Z" fill="#668088"></path>
                                                </svg>
                                            </span>
                                    </p>
                                </div>
                                    <ul>
                                       ${$("#micodelistListElement").html()}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                            <label
                                class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Ticker</label>
                            <input data-field="not-required" data-validation-type="ignore" name="ticker"
                                class="ad-block ad-uppercase ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                type="text" data-error-default="Ticker" placeholder="Ticker">
                        </p>
                        <div class="ad-mb-24 ad-w-1/2 ad-pl-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Status <sup class="ad-text-red-error">*</sup></label>
                                <div class="dropDownControl disableSection status default securityStatus ad-w-full ad-p-12 ad-mb-4" data-error-default="Selected valid disclosure type" data-function="showHideReportingEntity(event)" data-value="${defaultSecurityStatus}">
                                    <p class="ad-flex ad-justify-between ad-items-center">
                                        <label class="selectValue ad-text-blue-header">Active</label>
                                        <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                                        </svg>
                                    </p>
                                    <div style="width: 100%;" class="dropdown-list">
                                        <ul>
                                            <li><a data-value="active" href="">Active</a></li>
                                            <li><a data-value="listed" href="">Listed</a></li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                            <label
                                class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Security Short Name</label>
                            <input data-field="not-required" data-validation-type="ignore" name="security-short-name"
                                class="ad-block ad-uppercase ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                type="text" data-error-default="Short Name" placeholder="Short Name">
                        </p>
                    </section>
                </section>`;
    }

    var primaryUserTemplate = `<section class="ad-flex ad-flex-wrap ad-justify-between ad-pt-24 ad-mb-24">
                                <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                                    <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">First name <sup class="ad-text-red-error">*</sup></label>
                                    <input name="first-name"
                                        class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                        type="text" data-error-default="First name" placeholder="First name">
                                </p>
                                <p class="ad-mb-24 ad-w-1/2 ad-pl-16">
                                    <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Last name <sup class="ad-text-red-error">*</sup></label>
                                    <input name="last-name"
                                        class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                        type="text" data-validation-type="ignore" data-error-default="Last name" placeholder="Last name">
                                </p>

                                <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                                    <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Email address <sup class="ad-text-red-error">*</sup></label>
                                    <input name="email-address"
                                        class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                        type="email" data-error-default="Email address" placeholder="Email address">
                                </p>

                                <section class="ad-mb-24 ad-w-1/2 ad-pl-16">
                                <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Phone Number <sup class="ad-text-red-error">*</sup></label>
                                <section class="ad-flex mobileNoContainer ad-mb-4">
                                    <div class="mobileNoControl ad-w-full ad-p-12" data-error-default="Selected valid disclosure type">
                                        <p class="ad-flex ad-justify-between ad-items-center">
                                            <label class="selectValue ad-text-blue-header">+971</label>
                                            <svg style="height: 13px; position:relative;right: -4px;" class="ad-inline-block" width="16" height="16"
                                                viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088">
                                                </path>
                                            </svg>
                                        </p>
                                        <div style="width: 100%; display: none;" class="dropdown-list">
                                            ${$("#mobileNumberMaster").html()}
                                        </div>
                                    </div>
                                    <input name="mboile-no" data-validation-type="ignore"
                                        class="mobile-no-field ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header"
                                        type="number">
                                </section>
                            
                            </section>

                                <p class="ad-w-1/2 ad-pr-16">
                                    <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Employee
                                        Designation <sup class="ad-text-red-error">*</sup></label>
                                    <input name="designation"
                                        class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                                        type="text" data-error-default="Employee Designation" placeholder="Employee Designation">
                                </p>
                            </section>`;

    var secondPrimaryUser = `<section class="second-primary-user ad-flex ad-flex-wrap ad-justify-between ad-pt-24 ad-mb-4 ad-border-t-1 ad-border-gray-shadeOne">
                            <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">First name <sup class="ad-text-red-error">*</sup></label>
                            <input name="first-name"
                            class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                            type="text" data-error-default="First name" placeholder="First name">
                            </p>
                            <p class="ad-mb-24 ad-w-1/2 ad-pl-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Last name <sup class="ad-text-red-error">*</sup></label>
                            <input name="last-name"
                            class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                            type="text" data-validation-type="ignore" data-error-default="Last name" placeholder="Last name">
                            </p>
                            
                            <p class="ad-mb-24 ad-w-1/2 ad-pr-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Email address <sup class="ad-text-red-error">*</sup></label>
                            <input name="email-address"
                            class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                            type="email" data-error-default="Email address" placeholder="Email address">
                            </p>
                            
                            <section class="ad-mb-24 ad-w-1/2 ad-pl-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Phone Number <sup class="ad-text-red-error">*</sup></label>
                            <section class="ad-flex mobileNoContainer ad-mb-4">
                            <div class="mobileNoControl ad-w-full ad-p-12" data-error-default="Selected valid disclosure type">
                            <p class="ad-flex ad-justify-between ad-items-center">
                            <label class="selectValue ad-text-blue-header">+971</label>
                            <svg style="height: 13px; position:relative;right: -4px;" class="ad-inline-block" width="16" height="16"
                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088">
                            </path>
                            </svg>
                            </p>
                            <div style="width: 100%; display: none;" class="dropdown-list">
                            ${$("#mobileNumberMaster").html()}
                            </div>
                            </div>
                            <input name="mboile-no" data-validation-type="ignore"
                            class="mobile-no-field ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header"
                            type="number">
                            </section>
                            
                            </section>
                            
                            <p class="ad-w-1/2 ad-pr-16">
                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Employee
                            Designation <sup class="ad-text-red-error">*</sup></label>
                            <input name="designation"
                            class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                            type="text" data-error-default="Employee Designation" placeholder="Employee Designation">
                            </p>
                            <div class="remove-secondPrimaryUser ad-w-full ad-py-16 ad-text-blue-shadeFour ad-cursor-pointer ad-text-12 ad-flex ad-items-center">
                            <svg class="ad-inline ad-mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14 8C14 4.7 11.3 2 8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8ZM11 7H5V9H11V7Z"
                            fill="#0051A2" />
                            </svg>
                            Remove second primary user
                            </div>
                            </section>`;


    let securityTemplateNumber = 1;
    if ($("#securityContainer").hasClass("editable")) {

    } else {
        $("#securityContainer").append(securityTemplate(1));
    }

    // securityTemplateNumber = securityTemplateNumber +1;

    $("#add-anotherSecurity").click(function () {
        $(".delete-security-block").show()
        $("#securityContainer").append(securityTemplate(securityTemplateNumber));
        // securityTemplateNumber = securityTemplateNumber +1;
    })

    $(document).on("click", ".delete-security-block", function () {
        // if ($(".custom-security-block").length == 1) {
        //     $(".failed-otp ").hide(200).removeClass('success');
        //     $(".failed-otp label").text("Atleast one security required");
        //     $(".failed-otp ").show(200);
        // } else {
        $(this).parents(".custom-security-block").remove();
        // }
        setTimeout(() => {
            if ($(".delete-security-block").length == 1) {
                $(".delete-security-block").hide()
            }
        }, 200);
    })
    $(document).on("click", ".remove-secondPrimaryUser", function () {
        $(".second-primary-user").remove()
        $("#add-PrimaryUser").show()
        $(this).hide()
    })
    // For Editing the RE 

    $("#add-anotherSecurity.editRE").click(function () {
        $("#securityContainerEdit").append(securityTemplate(securityTemplateNumber));
        // securityTemplateNumber = securityTemplateNumber +1;
    })



    // Primary user functionality Starts here

    if ($("#primaryUser").hasClass("editable")) {

    } else {
        $("#primaryUser").append(primaryUserTemplate);
    }
    $("#add-PrimaryUser").click(function () {
        $(this).hide()
        $("#primaryUser").append(secondPrimaryUser);
    });
});


// New Code

$(document).on("click", ".dropDownControl.onboarding.issuer-security-type li a", function (e) {
    e.stopPropagation();
    $(this).parents(".dropdown-list").hide()
    if ($(this).html().toLowerCase() == "sukuk" || $(this).html().toLowerCase() == "debenture") {
        if (!$(this).parents(".section-block").children(".custom-input").length) {
            $(this).parents(".section-block").append(`
                <p class="custom-input ad-w-1/2 ad-pl-16">
                    <label
                        class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Coupon Rate <sup class="ad-text-red-error">*</sup></label></label>
                    <input name="coupon-rate" onkeyup="handleChangeCoupon(this);"
                        class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                        type="number" step=".01" data-error-default="Coupon Rate" placeholder="Coupon Rate">
                </p>
                <p class="custom-input ad-w-1/2">
                    <label
                        class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Maturity Date <sup class="ad-text-red-error">*</sup></label></label>
                    <input name="maturity-date" data-error="disabled"
                        class="ad-block ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-w-full ad-p-12 ad-text-blue-header ad-mb-4"
                        type="date" data-error-default="Date" placeholder="Maturity Date">
                </p>
            `);
        } else { }
        updateMaturityDate()
    } else {
        $(this).parents(".section-block").children(".custom-input").remove()
    }
});


$(document).on("click", ".dropDownControl.securityStatus li a", function (e) {
    e.preventDefault();
    let status = false;
    for (let index = 0; index < $(".dropDownControl.securityStatus").length; index++) {
        setTimeout(() => {
            if (status == true) { } else {
                if ($(".dropDownControl.securityStatus")[index].getAttribute('data-value') == "listed") {
                    status = true
                    let container = $(this).parents('.section-block')
                    $(container).find('input[name="isin-code"]').attr("data-field", "required")
                    $(container).find('input[name="mic-code"]').attr("data-field", "required")
                    $(container).find('input[name="ticker"]').attr("data-field", "required")
                } else {
                    let container = $(this).parents('.section-block')
                    $(container).find('input[name="isin-code"]').attr("data-field", "not-required")
                    $(container).find('input[name="mic-code"]').attr("data-field", "not-required")
                    $(container).find('input[name="ticker"]').attr("data-field", "not-required")
                    status = false
                }
            }
        }, 100);

    }
    setTimeout(() => {
        if (status) {
            appendCompanyListingForIssuer(true)
        } else {
            appendCompanyListingForIssuer(false)
        }
    }, 400);

});

function appendCompanyListingForIssuer(status) {
    if (status) {
        if (!$('#additionalReportingEntity > section').length) {
            $("#additionalReportingEntity").append(`
                <section>
                        <section style="height: 0;"
                        class="ad-my-40 ad-text-12 ad-text-center ad-border-solid ad-border-b-1 ad-border-blue-shadeOne">
                        <label
                            class="ad-px-24 ad-cursor-pointer ad-hidden ad-relative ad-text-blue-shadeFour ad-inline-block ad-bg-gray-shadeThree"
                            style="top: -12px; display: inline;">
                            <svg class="ad-inline ad-mr-4" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14 8C14 4.7 11.3 2 8 2C4.7 2 2 4.7 2 8C2 11.3 4.7 14 8 14C11.3 14 14 11.3 14 8ZM11 7H5V9H11V7Z"
                                    fill="#0051A2"></path>
                            </svg>
                
                            <span>Include Reporting Entity</span>
                        </label>
                    </section>
                    <div class="ad-mb-24 ad-w-full">
                        <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Reporting Entity</label>
                        <div class="dropDownControl default  ad-w-full ad-p-12" data-error-default="Selected valid disclosure type">
                            <p class="ad-flex ad-justify-between ad-items-center">
                                <label class="selectValue ad-text-blue-header">Select Reporting Entity</label>
                                <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                                </svg>
                            </p>
                            <div style="width: 100%;" class="dropdown-list">
                            <div class="ad-bg-white ad-py-8">
                                <p class="ad-bg-white ad-flex ad-mx-12 ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2">
                                    <input data-field="not-required" class="ad-bg-white ad-pl-12 ad-w-full ad-text-blue-header single-select-search-dropdown" type="text" placeholder="Search Reporting Entity">
                                    <span class="ad-px-12 ad-py-8">
                                            <svg class="ad-inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 17.8687L14.0312 13.125C16.3746 10.2976 16.0822 6.12774 13.3672 3.65505C10.6522 1.18236 6.47324 1.2799 3.87657 3.87657C1.2799 6.47324 1.18236 10.6522 3.65505 13.3672C6.12774 16.0822 10.2976 16.3746 13.125 14.0312L17.8687 18.75L18.75 17.8687ZM3.125 8.75C3.125 5.64339 5.64339 3.125 8.75 3.125C11.8566 3.125 14.375 5.64339 14.375 8.75C14.375 11.8566 11.8566 14.375 8.75 14.375C5.64339 14.375 3.125 11.8566 3.125 8.75Z" fill="#668088"></path>
                                            </svg>
                                        </span>
                                </p>
                            </div>
                                <ul>
                                ${$("#dynamicCompaniesList").html()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    </section>`);
        }
    } else {
        $("#additionalReportingEntity").empty()
    }
}

$(() => {
    try {
        $('.delete-security-block:first').hide()
    } catch (error) {

    }

})