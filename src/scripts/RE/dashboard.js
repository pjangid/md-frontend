$(document).ready(function() {

    $("#dashboardDocumentRE").sortable({
        stop: function() {
            let sequence = [];
            $("#dashboardDocumentRE li").each(function(index, element) {
                if ($(element).data('column')) {
                    sequence.push($(element).data('column'))
                }
            })
            registerNewColumnSequenceREDashboard(sequence.join(","))
        },
        handle: ".handle"
    });

    $(document).on("click", ".dropDownControl.default.dashboardDisclosreList li a", function(e) {
        let value = $(this).data("value");
        selectedDisclosureType = value
    });
    $(document).on("click", ".dropDownControl.default.dashboardTickerList li a", function(e) {
        let value = $(this).data("value");
        selectedTickerFilter = value
    });

    $(document).on('keyup', "#dashboardSearchInput", function() {
        selectedDisclosureKeywork = this.value
    })

    // Customize Dasboard Feature
    $(document).on("click", ".dropDownControl.companyListDasboard li", function(e) {
        e.stopPropagation()
        let companyId = $(this).data('value');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            let index = selectedCompanyDropdown.indexOf(companyId)
            delete(selectedCompanyDropdown[index])
        } else {
            $(this).addClass('active');
            selectedCompanyDropdown.push(companyId)
        }
        selectedCompanyDropdown = selectedCompanyDropdown.filter(function(el) {
            return el != null;
        });
    });



    $(document).on('keyup', "#companiesListInputDashboard", function() {
        let _this = this;
        let filteredList = $('ul#dashboardCompaniesList > li');
        let result = filteredList.filter(function(i, li) {
            let list_item_text = $(li).text().toUpperCase();
            let search_text = _this.value.toUpperCase();
            return ~list_item_text.indexOf(search_text);
        });

        filteredList.hide();
        result.show();
    })




    $(document).on("click", ".dropDownControl.dashboardDatePicker", function(e) {
        e.stopPropagation()
            // if ($(this).hasClass('active')) {
            //     $(this).children('.dropdown-list').hide();
            //     $("#datePickerDashboard").datepicker("hide");
            //     $(this).removeClass("active")
            // } else {
            //     $(this).children('.dropdown-list').show();
            //     $("#datePickerDashboard").datepicker({
            //         dateFormat: "yy-dd-mm"
            //     }).datepicker("setDate", "0");
            //     $(this).addClass('active')
            //     $("#ui-datepicker-div").show()
            // }
    });



    $(document).on("click", ".dropDownControl.dashboardDatePicker li a", function(e) {
        e.stopPropagation()
            // $("#datePickerDashboard").datepicker({
            //     dateFormat: "dd-mm-yy"
            // }).datepicker("setDate", $(this).data('value'));
            // console.log($(this).data('value'))
    });


    try {
        reArrangeColumnSequence()
    } catch (error) {

    }

}) 

window.sortDataREDashboard=(type,e)=>{
    console.log(type)
    console.log(e)
    if($(e).hasClass('asc')){
        $(e).addClass('desc');
        $(e).removeClass('asc')
        // Make Decending call
        console.log("Decending Call")
        $(e).attr('title','Click To Order By Ascending')

        DisclosureDashboardPayload.OrderBy="DSC";
        DisclosureDashboardPayload.ShortField=type;
        REDisclosureDashboardPagination()
    }else{
        $(e).removeClass('desc');
        $(e).addClass('asc');
        // Make Assending Call
        console.log("Make Assending Call")
        $(e).attr('title','Click To Order By Descending')


        DisclosureDashboardPayload.OrderBy="ASC";
        DisclosureDashboardPayload.ShortField=type;
        REDisclosureDashboardPagination()
    }
}

function reArrangeColumnSequence() {
    let sequence = $("#dashboardDocumentRE").data('list-sequence').split(',');

    let issuerColumn = ` <li data-column="issuer" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Issuer
        <span title="Click To Order By Ascending" onclick="sortDataREDashboard('issuer',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="issuer-column">

    </div>
    </li>`;
    let disclosureColumn = ` <li data-column="disclosure-type" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Disclosure type
        <span title="Click To Order By Ascending" onclick="sortDataREDashboard('disclosure-type',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="diclosure-type-column">

    </div>
    </li>`;
    let tickerColumn = ` <li data-column="ticker" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Ticker
        <span title="Click To Order By Ascending" onclick="sortDataREDashboard('ticker',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="tickerColumn">
        
    </div>

    </li>`;
    let submitterColumn = `<li data-column="submitter" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Submitter
        <span title="Click To Order By Ascending" onclick="sortDataREDashboard('submitter',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="submitter-column">

    </div>
    </li>`;
    let dateColumn = `<li style='width:150px' data-column="date" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Date
        <span title="Click To Order By Ascending" onclick="sortDataREDashboard('date',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="date-column">

    </div>
    </li>`
    let statusColumn = ` <li data-column="status" class="ad-flex-grow">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne ad-rounded-2">
        Status
        <span title="Click To Order By Ascending" onclick="sortDataREDashboard('status',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="statusColumn">
        
    </div>
</li>`;
    let readUnread = ` <li style="width:30px">
<div
    class="ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-r-1 ad-border-gray-shadeOne ad-rounded-2">
    <label class="ad-invisible">Read/Unread</label>
</div>
<div class="readUnreadColumn">
    
</div>
</li>`

    // let reportingEntityColumn = `<li data-column="reporting-entity" class="ad-flex-grow ">
    //     <div
    //         class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
    //         Reporting Entity
    //         <span>
    //             <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
    //                 xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" clip-rule="evenodd"
    //                     d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
    //                     fill="#668088" />
    //             </svg>
    //         </span>
    //     </div>
    //     <div class="re-name-column">

    //     </div>
    //     </li>`;


    //     let assignedColumn = `<li data-column="assigned-to" class="ad-flex-grow ">
    //     <div
    //         class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
    //         Assigned to
    //         <span>
    //             <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
    //                 xmlns="http://www.w3.org/2000/svg">
    //                 <path fill-rule="evenodd" clip-rule="evenodd"
    //                     d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
    //                     fill="#668088" />
    //             </svg>
    //         </span>
    //     </div>
    //     <div class="assignto-column">

    //     </div>
    //     </li>`;

    sequence.forEach(element => {
        if (element == "status") {
            appendColumn(statusColumn)
        }
        // else if (element == "reporting-entity") {
        //     appendColumn(reportingEntityColumn)
        // } 
        else if (element == "disclosure-type") {
            appendColumn(disclosureColumn)
        } else if (element == "submitter") {
            appendColumn(submitterColumn)
        }
        // else if (element == "assigned-to") {
        //     appendColumn(assignedColumn)
        // } 
        else if (element == "date") {
            appendColumn(dateColumn)
        } else if (element == "ticker") {
            appendColumn(tickerColumn)
        } else if (element == "issuer") {
            appendColumn(issuerColumn)
        }
    });
    appendColumn(readUnread)
}



function renderREStageTabs(stages) {
    $("#stageOfDisclosure li:not(:first-child)").remove()
    stages.forEach(element => {
                $("#stageOfDisclosure").append(`<li><a href="" data-key="${element["Key"]}" class="ad-py-24 ad-px-16 ad-inline-block ad-mr-8">
        ${element["Value"]}
        ${element["Count"]>0?`<span class="tabNotification ${element["Value"].toLowerCase().split(' ').join('-')}">${element["Count"]}</span>`:''}
        </a></li>`)
    });
}

function appendColumn(element) {
    $("#dashboardDocumentRE").append(element)
}

var newDocumentList = [];

// function fetchNewDocument() {
//     let number = Math.floor(Math.random() * 11) + 1;
//     newDocumentList = []
//     for (let index = 0; index < number; index++) {
//         newDocumentList.push(listofDocumentsDashborad[Math.floor(Math.random() * number) + 1]);
//     }
//     renderREDashboardDisclosure(newDocumentList)
// }



function renderREDashboardDisclosure(documentList) {
    appendFileIcon(documentList);
    appendStatus(documentList);
    appendTicker(documentList);
    appendREName(documentList);
    appendDisclosureType(documentList);
    appendSubmitter(documentList);
    appendAssignTO(documentList);
    appendDate(documentList);
    appendIssuer(documentList);
    appendReadUnread(documentList);
}
function appendReadUnread(documentList) {
    $("#dashboardDocumentRE .readUnreadColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .readUnreadColumn").append(`<div class="markReadUnread ad-relative ${!documentList[index]["MarkAsRead"]?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-py-22 ad-border-b-1 ad-border-gray-shadeOne ad-flex ad-text-blue-shadeFour ad-text-12" style="line-height:22px">
        <button class="ad-cursor-pointer">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="#0051A2"/>
            </svg>
            </button>
            <div>
                <ul class="readUnreadElementContainer ad-hidden ad-bg-white ad-absolute ad-shadow-typeOne" style="min-width: 200px;right: 11px;top:50px;z-index: 1;">
                    <li data-markRead="false" data-itemID="${documentList[index]["ItemID"]}" class="hover:ad-bg-gray-shadeThree ${!documentList[index]["MarkAsRead"]?'ad-opacity-25 ad-pointer-events-none':''} ad-cursor-pointer ad-py-12 ad-px-16 ad-border-b-1 ad-border-gray-shadeThree">Mark as unread</li>
                    <li data-markRead="true" data-itemID="${documentList[index]["ItemID"]}" class="hover:ad-bg-gray-shadeThree ${!documentList[index]["MarkAsRead"]?'':'ad-opacity-25 ad-pointer-events-none'} ad-cursor-pointer ad-py-12 ad-px-16 ad-border-b-1 ad-border-gray-shadeThree">Mark as read</li>
                </ul>
            </div>
            
    </div>`);
    }
}

function appendDate(documentList) {
    $("#dashboardDocumentRE .date-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .date-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"]?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
          <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px"> ${documentList[index]["UpdatedDate"]}</label></a>
        </p>`);
    }
}

function appendAssignTO(documentList) {
    $("#dashboardDocumentRE .assignto-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .assignto-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["AssignedTo"]}</label></a>
        </p>`);
    }
}

function appendSubmitter(documentList) {
    $("#dashboardDocumentRE .submitter-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .submitter-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["Submitter"]}</label></a>
        </p>`);
    }
}

function appendDisclosureType(documentList) {
    $("#dashboardDocumentRE .diclosure-type-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .diclosure-type-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["DisclosureType"]}</label></a>
        </p>`);
    }
}

function appendREName(documentList) {
    $("#dashboardDocumentRE .re-name-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .re-name-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer  style="top:4px"${!documentList[index]["MarkAsRead"] ? 'ad-bg-white unreadDocumentItem' : 'readDocumentItem'}">${documentList[index]["Title"]}</label></a>
        </p>`);
    }
}

function appendFileIcon(documentList) {
    $("#dashboardDocumentRE .fileIconColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .fileIconColumn").append(`<p style="padding-bottom:17px;padding-top:17px" class="${!documentList[index]["MarkAsRead"] ? 'ad-bg-white unreadDocumentItem' : 'readDocumentItem'} ad-text-center ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            <a href="${documentList[index]["MediaUrl"]}"><img class="ad-inline" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATPSURBVHgBtVZNTFxVFD73vQfDb5kakICE4kSMAZN2xJ8YN1NrF5poH626MCnTNi7sSt0YExMdTBddSJSYLowEypBuXJSJ1Z1R2k2NKYqJhRiTMjG0iCAwjMPw5r13r9+9bx7MUIEpbU9y37v33HPPd/7uDyOfjg1HibPP0AtS6bREjPXTxeO92wmx9V53fJoE9RO5CSqJ9INYPUgkAKRtC2QU9NsUQOJkknYic0R+IScECX4I/Yt0FLwtgDS6e/oFQM+jnQDQR/cHJHFSfqc3gOKD9x7kNiBxcDOQQbsiR36SSD4K5sIRErlf8xPIkXaKiCNHceSo55Rk7s4TZbkGy8XHqliYPr3RxPco2iDgTpA5dGD3IAooig+PkXD3oj28qYUAkkSg1J7bZbgKPaLlfNsgM84Kh/8PYg6ZiHfQW+xOqL1jDmGsm54AS1Li+FheVn3z8iA3ic/lrUEq0F4diZArRpHDYShrw+L9dW9cCKWyDvaAQIwYksz34YQQlNO7yOAHPHkOvraMvCTot6+uUOfrsgwUFeWkwtUZWbbHG42+SaM9L6AXTKWtMHGB2PNL4B2mpeTT0BCk8lw3rVkoMRKRpfNPvmZcOoSK+pxWbjIfoNATFcM1a0EnrUZT7CMDMWJGq5pN3ZilB0IaqknKldHVTzL00rk/MUaSs7eIytlYMDpINlQffuoMjX85LTUaulfsxdWVdRg5yjKE1i4jO/07LUxF6MqZv4i7OjyR8gHMBVTftQ3K5Tx527pF3L5JdkbvbN+n3eaJwDnH5AHHVnVydW/RN6c/raqqYqurq3JUrpQyYw89czpENc2tOHkf11f//tCVczL6377Vh79TX1/vXM9AtrmHHKcgJ729vV7JuZZm5NL/5g3QASCN0AGma3ZmivSyF6n52WtU29JPmYXewNWzP1FmOePL19bWapxz1v7oY2Lr6oJA5bW+6+l0+qHKykppgMhmsyS9qbz8wQDGA3KMOab48lz5sW8K49asl1e2uLgoFtf+IApBuVGQk1gsto7MGJN9DiUumlNdXW1LH9GXPIJXgrziVA0Aki8gxzVNcxsbG3l7e7vS5Yer2BO9jK+srDhwm8EbBZzJZERdXR2lUikjH0IJJK2WigXmVVrxl8Y4kHPm7D2u9MSnouoKlO+VlrgAsBsaGnJgqYaFUoHfHABJG528YjsvZ7e0tEi+S4GaopwUgVgu43Nzc2oRrLc7OjpyXV1dOfmHAgvAFnv5i3F67r0HIbPW1NS0Jv8+yMzMjFzLz54b2RokUF3HpSWRSMQJh8PO5OSkMz4+zjs7O6WHzvz8vC00bNCKoPJgdnbWgRG+Jw5yy7EdxPvxn0XhPil8rQicQU/Q19GJPL/IGihQsrGJNjdA1iOvlH2XhIcC5a9ygoJBcXKvcLqHpew/uMCOyoN0A8QcxjHC3qbNx7ZPAgdmIhpTxhhWiOzAfpjyjnqxrAeE54Mj2hR/NKrSv1FdUoE5MkZbkjrCPbINoa4AoZ8vdtrvu9LQbXTtRNITc6jtTpaUdv12x5fUM7aQzKEw+Df8e3w7Ku36Fe67xBGaY8Ne2EkPqyeqEP24NSd2Ws6oVDJxYzI+ql4isjgUAPJYApUOooAQGqb9oB7mJQLsjtSD4s7oP5ieTkIiDl+YAAAAAElFTkSuQmCC" alt=""></a>    
        </p>`);
    }
}

function appendStatus(documentList) {
    $("#dashboardDocumentRE .statusColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .statusColumn").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            <span class="documentStatus ${documentList[index]["Status"].split(" ").join('-').toLowerCase()}"></span>
            <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["Status"]}</label></a>
        </p>`);
    }
}

function appendTicker(documentList) {
    $("#dashboardDocumentRE .tickerColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .tickerColumn").append(`<div class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            ${generateListFromColumn(documentList,index,"Ticker","Tickers")}
        </div>`);
    }
}

function appendIssuer(documentList) {
    $("#dashboardDocumentRE .issuer-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#dashboardDocumentRE .issuer-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer ${documentList[index]["MarkAsRead"] ?'':'ad-font-semibold'}" style="top:4px">${documentList[index]["Issuer"]}</label></a>
        </p>`);
    }
}


window.renderREDashboard=function(data){
    renderREDashboardDisclosure(data.Disclosures)
    renderREStageTabs(data.Status)
}