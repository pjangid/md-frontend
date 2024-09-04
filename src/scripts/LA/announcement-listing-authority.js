$(document).ready(function() {
    $("#announcementListingAuthority").sortable({
        stop: function(ev,ul) {
            let sequence = [];
            $("#announcementListingAuthority li").each(function(index, element) {
                if ($(element).data('column')) {
                    sequence.push($(element).data('column'))
                }
            })
            registerNewColumnSequenceListingAuthority(sequence.join(","))
        },
        handle: ".handle"
    });

    try {
        reArrangeColumnSequenceAnnouncement()
    } catch (error) {

    }

});

window.sortDataLAAnnouncementListingAuthority=(type,e)=>{
    console.log(type)
    console.log(e)
    if($(e).hasClass('asc')){
        $(e).addClass('desc');
        $(e).removeClass('asc')
        // Make Decending call
        console.log("Decending Call")
        $(e).attr('title','Click To Order By Ascending')

        announcementPayload.OrderBy="DSC";
        announcementPayload.ShortField=type;
       renderPaginationForListingAnnouncement();
    }else{
        $(e).removeClass('desc');
        $(e).addClass('asc');
        // Make Assending Call
        console.log("Make Assending Call")
        $(e).attr('title','Click To Order By Descending')


        announcementPayload.OrderBy="ASC";
        announcementPayload.ShortField=type;
       renderPaginationForListingAnnouncement();
    }
}

$(()=>{
    try {
        $(document).on("click", ".readUnreadElementContainerAnnouncementListing > li", function() {
            let itemID = $(this).attr("data-itemid");
            let markRead = $(this).attr("data-markread");
            markStatusReadUnreadAnnouncementListing(itemID, markRead)
        })
    } catch (error) {

    }
})

function reArrangeColumnSequenceAnnouncement() {
    let sequence = $("#announcementListingAuthority").data('list-sequence').split(',');

    let title = ` <li data-column="title" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Title
        <span title="Click To Order By Ascending" onclick="sortDataLAAnnouncementListingAuthority('title',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="title-column">

    </div>
    </li>`;
    let micCode = ` <li data-column="mic-code" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        RIE
        <span title="Click To Order By Ascending" onclick="sortDataLAAnnouncementListingAuthority('mic-code',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="mic-code">

    </div>
    </li>`;
    let actionBy = `<li data-column="action" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Actioned By
        <span title="Click To Order By Ascending" onclick="sortDataLAAnnouncementListingAuthority('action-by',this)" class="ad-cursor-pointer ad-p-4">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M8 14L4.5 10.5L5.2 9.8L8 12.6L10.8 9.8L11.5 10.5L8 14ZM8 2L11.5 5.5L10.8 6.2L8 3.4L5.2 6.2L4.5 5.5L8 2Z"
                    fill="#668088" />
            </svg>
        </span>
    </div>
    <div class="action-column">

    </div>
    </li>`;
    let dateColumn = `<li style='width:150px' data-column="date" class="ad-flex-grow ">
    <div
        class="handle ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-gray-shadeOne">
        Date
        <span title="Click To Order By Ascending" onclick="sortDataLAAnnouncementListingAuthority('date',this)" class="ad-cursor-pointer ad-p-4">
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
        <span title="Click To Order By Ascending" onclick="sortDataLAAnnouncementListingAuthority('status',this)" class="ad-cursor-pointer ad-p-4">
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
</li>`

let readUnread = ` <li style="width:30px">
                        <div
                            class="ad-bg-gray-shadeThree ad-text-blue-header ad-text-12 ad-font-semibold ad-text-left ad-py-16 ad-border-b-1 ad-border-t-1 ad-border-r-1 ad-border-gray-shadeOne ad-rounded-2">
                            <label class="ad-invisible">Read/Unread</label>
                        </div>
                        <div class="readUnreadColumn">
                            
                        </div>
                </li>`

    sequence.forEach(element => {
        if (element == "status") {
            appendColumn(statusColumn)
        } else if (element == "mic-code") {
            appendColumn(micCode)
        } else if (element == "action") {
            appendColumn(actionBy)
        } else if (element == "date") {
            appendColumn(dateColumn)
        } else if (element == "title") {
            appendColumn(title)
        }
    });
    appendColumn(readUnread)
}
 



function appendColumn(element) {
    $("#announcementListingAuthority").append(element)
}

var newDocumentList = [];




window.renderAnnouncementListingTabTwo=function(documentList) {

    appendFileIcon(documentList);
    appendStatus(documentList);
    appendActionColumn(documentList);
    micCode(documentList);
    appendDate(documentList);
    title(documentList);
    appendReadUnread(documentList);
}

function appendReadUnread(documentList) {
    $("#announcementListingAuthority .readUnreadColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#announcementListingAuthority .readUnreadColumn").append(`<div class="markReadUnread ad-relative ${!documentList[index]["MarkAsRead"]?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-py-22 ad-border-b-1 ad-border-gray-shadeOne ad-flex ad-text-blue-shadeFour ad-text-12" style="line-height:22px">
        <button class="ad-cursor-pointer">
            <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="#0051A2"/>
            </svg>
            </button>
            <div>
                <ul class="readUnreadElementContainerAnnouncementListing ad-hidden ad-bg-white ad-absolute ad-shadow-typeOne" style="min-width: 200px;right: 11px;top:50px;z-index: 1;">
                    <li data-markRead="false" data-itemid="${documentList[index]["ItemID"]}" class="hover:ad-bg-gray-shadeThree ${!documentList[index]["MarkAsRead"]?'ad-opacity-25 ad-pointer-events-none':''} ad-cursor-pointer ad-py-12 ad-px-16 ad-border-b-1 ad-border-gray-shadeThree">Mark as unread</li>
                    <li data-markRead="true" data-itemid="${documentList[index]["ItemID"]}" class="hover:ad-bg-gray-shadeThree ${!documentList[index]["MarkAsRead"]?'':'ad-opacity-25 ad-pointer-events-none'} ad-cursor-pointer ad-py-12 ad-px-16 ad-border-b-1 ad-border-gray-shadeThree">Mark as read</li>
                </ul>
            </div>
            
    </div>`);
    }
}

function appendDate(documentList) {
    $("#announcementListingAuthority .date-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#announcementListingAuthority .date-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"]?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
          <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px"> ${documentList[index]["Date"]}</label></a>
        </p>`);
    }
}


function appendActionColumn(documentList) {
    $("#announcementListingAuthority .action-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#announcementListingAuthority .action-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["ActionedBy"]}</label></a>
        </p>`);
    }
}

function micCode(documentList) {
    $("#announcementListingAuthority .mic-code").empty();
    // for (let index = 0; index < documentList.length; index++) {
    //     $("#announcementListingAuthority .mic-code").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
    //     <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["MICCode"]}</label></a>
    //     </p>`);
    // }

    for (let index = 0; index < documentList.length; index++) {
        $("#announcementListingAuthority .mic-code").append(`<div class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            ${generateListFromColumn(documentList,index,"MICCode","RIE")}
        </div>`);
    }
}


function appendFileIcon(documentList) {
    $("#announcementListingAuthority .fileIconColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#announcementListingAuthority .fileIconColumn").append(`<p style="padding-bottom:17px;padding-top:17px" class="${!documentList[index]["MarkAsRead"] ? 'ad-bg-white unreadDocumentItem' : 'readDocumentItem'} ad-text-center ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            <a href="${documentList[index]["MediaUrl"]}" download><img class="ad-inline" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAgCAYAAADnnNMGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATPSURBVHgBtVZNTFxVFD73vQfDb5kakICE4kSMAZN2xJ8YN1NrF5poH626MCnTNi7sSt0YExMdTBddSJSYLowEypBuXJSJ1Z1R2k2NKYqJhRiTMjG0iCAwjMPw5r13r9+9bx7MUIEpbU9y37v33HPPd/7uDyOfjg1HibPP0AtS6bREjPXTxeO92wmx9V53fJoE9RO5CSqJ9INYPUgkAKRtC2QU9NsUQOJkknYic0R+IScECX4I/Yt0FLwtgDS6e/oFQM+jnQDQR/cHJHFSfqc3gOKD9x7kNiBxcDOQQbsiR36SSD4K5sIRErlf8xPIkXaKiCNHceSo55Rk7s4TZbkGy8XHqliYPr3RxPco2iDgTpA5dGD3IAooig+PkXD3oj28qYUAkkSg1J7bZbgKPaLlfNsgM84Kh/8PYg6ZiHfQW+xOqL1jDmGsm54AS1Li+FheVn3z8iA3ic/lrUEq0F4diZArRpHDYShrw+L9dW9cCKWyDvaAQIwYksz34YQQlNO7yOAHPHkOvraMvCTot6+uUOfrsgwUFeWkwtUZWbbHG42+SaM9L6AXTKWtMHGB2PNL4B2mpeTT0BCk8lw3rVkoMRKRpfNPvmZcOoSK+pxWbjIfoNATFcM1a0EnrUZT7CMDMWJGq5pN3ZilB0IaqknKldHVTzL00rk/MUaSs7eIytlYMDpINlQffuoMjX85LTUaulfsxdWVdRg5yjKE1i4jO/07LUxF6MqZv4i7OjyR8gHMBVTftQ3K5Tx527pF3L5JdkbvbN+n3eaJwDnH5AHHVnVydW/RN6c/raqqYqurq3JUrpQyYw89czpENc2tOHkf11f//tCVczL6377Vh79TX1/vXM9AtrmHHKcgJ729vV7JuZZm5NL/5g3QASCN0AGma3ZmivSyF6n52WtU29JPmYXewNWzP1FmOePL19bWapxz1v7oY2Lr6oJA5bW+6+l0+qHKykppgMhmsyS9qbz8wQDGA3KMOab48lz5sW8K49asl1e2uLgoFtf+IApBuVGQk1gsto7MGJN9DiUumlNdXW1LH9GXPIJXgrziVA0Aki8gxzVNcxsbG3l7e7vS5Yer2BO9jK+srDhwm8EbBZzJZERdXR2lUikjH0IJJK2WigXmVVrxl8Y4kHPm7D2u9MSnouoKlO+VlrgAsBsaGnJgqYaFUoHfHABJG528YjsvZ7e0tEi+S4GaopwUgVgu43Nzc2oRrLc7OjpyXV1dOfmHAgvAFnv5i3F67r0HIbPW1NS0Jv8+yMzMjFzLz54b2RokUF3HpSWRSMQJh8PO5OSkMz4+zjs7O6WHzvz8vC00bNCKoPJgdnbWgRG+Jw5yy7EdxPvxn0XhPil8rQicQU/Q19GJPL/IGihQsrGJNjdA1iOvlH2XhIcC5a9ygoJBcXKvcLqHpew/uMCOyoN0A8QcxjHC3qbNx7ZPAgdmIhpTxhhWiOzAfpjyjnqxrAeE54Mj2hR/NKrSv1FdUoE5MkZbkjrCPbINoa4AoZ8vdtrvu9LQbXTtRNITc6jtTpaUdv12x5fUM7aQzKEw+Df8e3w7Ku36Fe67xBGaY8Ne2EkPqyeqEP24NSd2Ws6oVDJxYzI+ql4isjgUAPJYApUOooAQGqb9oB7mJQLsjtSD4s7oP5ieTkIiDl+YAAAAAElFTkSuQmCC" alt=""></a>    
        </p>`);
    }
}

function appendStatus(documentList) {
    $("#announcementListingAuthority .statusColumn").empty();
    for (let index = 0; index < documentList.length; index++) {
        // $("#announcementListingAuthority .statusColumn").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        //     <span class="documentStatus ${documentList[index]["Status"].split(" ").join('-').toLowerCase()}"></span>
        //     <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index]["Status"]}</label></a>
        // </p>`);
        $("#announcementListingAuthority .statusColumn").append(`<p class="ad-flex ad-items-center ad-py-20 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
            <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="${documentList[index]["Status"].split(" ").join('-').toLowerCase()} documentAnchor applyEllipsis ad-inline-block ad-relative ad-cursor-pointer">${documentList[index]["Status"]}</label></a>
        </p>`);
    }
}

function title(documentList) {
    $("#announcementListingAuthority .title-column").empty();
    for (let index = 0; index < documentList.length; index++) {
        $("#announcementListingAuthority .title-column").append(`<p class="ad-flex ad-items-center ad-py-22 ${!documentList[index]["MarkAsRead"] ?'ad-bg-white':'ad-bg-gray-shadeThree'} ad-w-full  ad-leading-20 ad-text-blue-shadeTwo ad-border-b-1 ad-border-gray-shadeOne">
        <a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer ${documentList[index]["MarkAsRead"] ?'':'ad-font-semibold'}" style="top:4px">${documentList[index]["Title"]}</label></a>
        </p>`);
    }
}



